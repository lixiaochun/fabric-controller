
package msf.fc.node.interfaces.lagifs;

import org.eclipse.jetty.http.HttpStatus;

import msf.fc.common.data.FcLagIf;
import msf.fc.db.dao.clusters.FcLagIfDao;
import msf.fc.rest.ec.node.interfaces.lag.data.LagIfReadEcResponseBody;
import msf.mfcfc.common.constant.ErrorCode;
import msf.mfcfc.common.constant.NodeType;
import msf.mfcfc.common.constant.OperationType;
import msf.mfcfc.common.constant.SynchronousType;
import msf.mfcfc.common.constant.SystemInterfaceType;
import msf.mfcfc.common.exception.MsfException;
import msf.mfcfc.common.log.MsfLogger;
import msf.mfcfc.common.util.ParameterCheckUtil;
import msf.mfcfc.core.scenario.RestResponseBase;
import msf.mfcfc.db.SessionWrapper;
import msf.mfcfc.node.interfaces.lagifs.data.LagIfReadResponseBody;
import msf.mfcfc.node.interfaces.lagifs.data.LagIfRequest;

/**
 * Implementation class for the Lag interface information acquisition.
 *
 * @author NTT
 *
 */
public class FcLagInterfaceReadScenario extends FcAbstractLagInterfaceScenarioBase<LagIfRequest> {

  private LagIfRequest request;

  private static final MsfLogger logger = MsfLogger.getInstance(FcLagInterfaceReadScenario.class);

  /**
   * Constructor.
   *
   * <p>
   * Set the "operation type" and "system interface type" as arguments.
   * </p>
   *
   * @param operationType
   *          Operation type
   * @param systemInterfaceType
   *          System interface type
   *
   */
  public FcLagInterfaceReadScenario(OperationType operationType, SystemInterfaceType systemInterfaceType) {

    this.operationType = operationType;
    this.systemIfType = systemInterfaceType;

    this.syncType = SynchronousType.SYNC;
  }

  @Override
  protected void checkParameter(LagIfRequest request) throws MsfException {

    try {
      logger.methodStart(new String[] { "request" }, new Object[] { request });

      ParameterCheckUtil.checkNumericId(request.getClusterId(), ErrorCode.PARAMETER_VALUE_ERROR);
      ParameterCheckUtil.checkNotNull(NodeType.getEnumFromPluralMessage(request.getFabricType()));
      ParameterCheckUtil.checkNumericId(request.getNodeId(), ErrorCode.RELATED_RESOURCE_NOT_FOUND);
      ParameterCheckUtil.checkNumericId(request.getLagIfId(), ErrorCode.TARGET_RESOURCE_NOT_FOUND);

      this.request = request;

    } finally {
      logger.methodEnd();
    }
  }

  @Override
  protected RestResponseBase executeImpl() throws MsfException {
    try {
      logger.methodStart();

      RestResponseBase responseBase = null;
      SessionWrapper sessionWrapper = new SessionWrapper();
      try {
        sessionWrapper.openSession();
        FcLagIfDao fcLagIfDao = new FcLagIfDao();

        FcLagIf fcLagIf = getLagInterface(sessionWrapper, fcLagIfDao, request.getFabricTypeEnum().getCode(),
            Integer.parseInt(request.getNodeId()), Integer.parseInt(request.getLagIfId()));

        responseBase = responseLagInterfaceReadData(fcLagIf);

      } catch (MsfException msfException) {
        logger.error(msfException.getMessage(), msfException);
        throw msfException;
      } finally {
        sessionWrapper.closeSession();
      }

      return responseBase;
    } finally {
      logger.methodEnd();
    }
  }

  private FcLagIf getLagInterface(SessionWrapper sessionWrapper, FcLagIfDao fcLagIfDao, Integer nodeType,
      Integer nodeId, Integer lagIfId) throws MsfException {
    try {
      logger.methodStart();
      FcLagIf fcLagIf = fcLagIfDao.read(sessionWrapper, nodeType, nodeId, lagIfId);
      if (fcLagIf == null) {

        throw new MsfException(ErrorCode.TARGET_RESOURCE_NOT_FOUND,
            "target resource is not found. parameters = fcLagIf");
      }
      return fcLagIf;
    } finally {
      logger.methodEnd();
    }
  }

  private RestResponseBase responseLagInterfaceReadData(FcLagIf fcLagIf) throws MsfException {
    try {
      logger.methodStart(new String[] { "fcLagIf" }, new Object[] { fcLagIf });
      LagIfReadResponseBody body = new LagIfReadResponseBody();

      LagIfReadEcResponseBody lagIfReadEcResponseBody = sendLagInterfaceRead(fcLagIf.getNode(), request.getLagIfId());
      body.setLagIf(getLagIfData(fcLagIf, lagIfReadEcResponseBody.getLagIf()));
      return createRestResponse(body, HttpStatus.OK_200);
    } finally {
      logger.methodEnd();
    }
  }

}
