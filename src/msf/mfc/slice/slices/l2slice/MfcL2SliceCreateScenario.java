
package msf.mfc.slice.slices.l2slice;

import java.text.MessageFormat;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import msf.mfc.common.data.MfcL2Slice;
import msf.mfc.db.dao.slices.MfcL2SliceDao;
import msf.mfc.slice.MfcSliceManager;
import msf.mfcfc.common.constant.ErrorCode;
import msf.mfcfc.common.constant.OperationType;
import msf.mfcfc.common.constant.SliceType;
import msf.mfcfc.common.constant.SynchronousType;
import msf.mfcfc.common.constant.SystemInterfaceType;
import msf.mfcfc.common.exception.MsfException;
import msf.mfcfc.common.log.MsfLogger;
import msf.mfcfc.core.scenario.RestResponseBase;
import msf.mfcfc.db.SessionWrapper;
import msf.mfcfc.rest.common.JsonUtil;
import msf.mfcfc.slice.slices.l2slice.data.L2SliceCreateRequestBody;
import msf.mfcfc.slice.slices.l2slice.data.L2SliceRequest;

/**
 * Implementation class for L2 slice addition.
 *
 * @author NTT
 *
 */
public class MfcL2SliceCreateScenario extends MfcAbstractL2SliceScenarioBase<L2SliceRequest> {

  private static final MsfLogger logger = MsfLogger.getInstance(MfcL2SliceCreateScenario.class);

  private L2SliceCreateRequestBody requestBody;

  /**
   * Constructor.
   *
   * <p>
   * Set the "operation type" and "system interface type" as arguments
   * </p>
   *
   * @param operationType
   *          Operation type
   * @param systemInterfaceType
   *          System interface type
   *
   */
  public MfcL2SliceCreateScenario(OperationType operationType, SystemInterfaceType systemInterfaceType) {
    this.operationType = operationType;
    this.systemIfType = systemInterfaceType;

    this.syncType = SynchronousType.SYNC;
  }

  @Override
  protected RestResponseBase executeImpl() throws MsfException {
    logger.performance("start wait to l2slice creation process.");

    synchronized (MfcSliceManager.getInstance().getL2SliceCreateLockObject()) {
      logger.performance("end wait to l2slice creation process.");
      SessionWrapper sessionWrapper = new SessionWrapper();
      try {
        logger.methodStart();

        checkRrConfiguration();

        try {
          sessionWrapper.openSession();
          sessionWrapper.beginTransaction();
          MfcL2SliceDao l2SliceDao = new MfcL2SliceDao();

          MfcL2Slice newL2Slice = makeNewL2Slice(sessionWrapper, l2SliceDao);

          l2SliceDao.create(sessionWrapper, newL2Slice);

          return sendSliceCreateDeleteRequest(sessionWrapper, SliceType.L2_SLICE, true, JsonUtil.toJson(requestBody),
              newL2Slice.getSliceId());

        } catch (MsfException exp) {
          logger.error(exp.getMessage(), exp);
          sessionWrapper.rollback();
          throw exp;
        } finally {
          sessionWrapper.closeSession();
        }
      } finally {
        logger.methodEnd();
      }
    }

  }

  @Override
  protected void checkParameter(L2SliceRequest request) throws MsfException {
    try {
      logger.methodStart(new String[] { "request" }, new Object[] { request });

      L2SliceCreateRequestBody requestBody = JsonUtil.fromJson(request.getRequestBody(),
          L2SliceCreateRequestBody.class);
      requestBody.validate();
      logger.debug("requestBody=" + request.getRequestBody());

      this.request = request;
      this.requestBody = requestBody;

    } finally {
      logger.methodEnd();
    }
  }

  private MfcL2Slice makeNewL2Slice(SessionWrapper sessionWrapper, MfcL2SliceDao l2SliceDao) throws MsfException {
    try {
      logger.methodStart(new String[] { "sessionWrapper", "l2SliceDao" }, new Object[] { sessionWrapper, l2SliceDao });

      List<MfcL2Slice> l2SliceList = l2SliceDao.readList(sessionWrapper);

      checkSliceMaxNum(l2SliceList.size(), SliceType.L2_SLICE);

      MfcL2Slice newL2Slice = new MfcL2Slice();

      Set<Integer> vrfIdSet = createVrfIdSet(l2SliceList);
      int vrfId = getNextVrfId(sessionWrapper, vrfIdSet, SliceType.L2_SLICE);

      requestBody.setVrfId(vrfId);
      newL2Slice.setVrfId(vrfId);

      if (requestBody.getSliceId() == null) {

        Set<String> sliceIdSet = createSliceIdSet(l2SliceList);

        int sliceId = getNextSliceId(sessionWrapper, sliceIdSet, SliceType.L2_SLICE);

        requestBody.setSliceId(String.valueOf(sliceId));
        newL2Slice.setSliceId(String.valueOf(sliceId));
      } else {

        checkSliceDuplicate(sessionWrapper, l2SliceDao);
        newL2Slice.setSliceId(requestBody.getSliceId());
      }
      newL2Slice.setRemarkMenu(requestBody.getRemarkMenu());
      return newL2Slice;
    } finally {
      logger.methodEnd();
    }
  }

  private Set<Integer> createVrfIdSet(List<MfcL2Slice> l2SliceList) {
    try {
      logger.methodStart(new String[] { "l2SliceList" }, new Object[] { l2SliceList });
      Set<Integer> vrfIdSet = new HashSet<>();
      for (MfcL2Slice l2Slice : l2SliceList) {
        vrfIdSet.add(l2Slice.getVrfId());
      }
      return vrfIdSet;
    } finally {
      logger.methodEnd();
    }
  }

  private Set<String> createSliceIdSet(List<MfcL2Slice> l2SliceList) {
    try {
      logger.methodStart(new String[] { "l2SliceList" }, new Object[] { l2SliceList });
      Set<String> sliceIdSet = new HashSet<>();
      for (MfcL2Slice l2Slice : l2SliceList) {
        sliceIdSet.add(l2Slice.getSliceId());
      }
      return sliceIdSet;
    } finally {
      logger.methodEnd();
    }
  }

  private void checkSliceDuplicate(SessionWrapper sessionWrapper, MfcL2SliceDao l2SliceDao) throws MsfException {
    try {
      logger.methodStart(new String[] { "sessionWrapper", "l2SliceDao" }, new Object[] { sessionWrapper, l2SliceDao });
      String targetSliceId = requestBody.getSliceId();
      MfcL2Slice l2Slice = l2SliceDao.read(sessionWrapper, targetSliceId);
      if (l2Slice != null) {
        String logMsg = MessageFormat.format("l2slice duplicate.sliceId = {0}.", targetSliceId);
        logger.error(logMsg);
        throw new MsfException(ErrorCode.TARGET_RESOURCE_ALREADY_EXIST, logMsg);
      }

    } finally {
      logger.methodEnd();
    }
  }

}
