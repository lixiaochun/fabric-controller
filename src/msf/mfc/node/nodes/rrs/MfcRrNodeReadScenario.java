
package msf.mfc.node.nodes.rrs;

import org.eclipse.jetty.http.HttpStatus;

import msf.mfc.common.config.MfcConfigManager;
import msf.mfc.common.config.type.system.SwCluster;
import msf.mfc.db.dao.clusters.MfcSwClusterDao;
import msf.mfcfc.common.constant.ErrorCode;
import msf.mfcfc.common.constant.MfcFcRequestUri;
import msf.mfcfc.common.constant.OperationType;
import msf.mfcfc.common.constant.RestUserTypeOption;
import msf.mfcfc.common.constant.SynchronousType;
import msf.mfcfc.common.constant.SystemInterfaceType;
import msf.mfcfc.common.exception.MsfException;
import msf.mfcfc.common.log.MsfLogger;
import msf.mfcfc.common.util.ParameterCheckUtil;
import msf.mfcfc.core.scenario.RestResponseBase;
import msf.mfcfc.db.SessionWrapper;
import msf.mfcfc.node.nodes.rrs.data.RrNodeReadOwnerResponseBody;
import msf.mfcfc.node.nodes.rrs.data.RrNodeRequest;
import msf.mfcfc.rest.common.JsonUtil;
import msf.mfcfc.rest.common.RestClient;

/**
 * Implementation class for RR node information acquisition.
 *
 * @author NTT
 *
 */
public class MfcRrNodeReadScenario extends MfcAbstractRrNodeScenarioBase<RrNodeRequest> {

  private RrNodeRequest request;

  private static final MsfLogger logger = MsfLogger.getInstance(MfcRrNodeReadScenario.class);

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
  public MfcRrNodeReadScenario(OperationType operationType, SystemInterfaceType systemInterfaceType) {
    this.operationType = operationType;
    this.systemIfType = systemInterfaceType;

    this.syncType = SynchronousType.SYNC;
  }

  @Override
  protected void checkParameter(RrNodeRequest request) throws MsfException {
    try {

      logger.methodStart(new String[] { "request" }, new Object[] { request });

      ParameterCheckUtil.checkNumericId(request.getClusterId(), ErrorCode.PARAMETER_VALUE_ERROR);
      ParameterCheckUtil.checkNumericId(request.getNodeId(), ErrorCode.TARGET_RESOURCE_NOT_FOUND);

      checkUserTypeOperator(request.getUserTypeEnum());

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

        MfcSwClusterDao mfcSwClusterDao = new MfcSwClusterDao();

        getSwCluster(sessionWrapper, mfcSwClusterDao, Integer.valueOf(request.getClusterId()));

        responseBase = sendRrNodeRead(request.getClusterId());

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

  private RestResponseBase sendRrNodeRead(String swClusterId) throws MsfException {
    try {
      logger.methodStart(new String[] { "swClusterId" }, new Object[] { swClusterId });

      SwCluster swCluster = MfcConfigManager.getInstance().getSystemConfSwClusterData(Integer.valueOf(swClusterId))
          .getSwCluster();
      String fcControlAddress = swCluster.getFcControlAddress();
      int fcControlPort = swCluster.getFcControlPort();

      RestResponseBase restResponseBase = RestClient.sendRequest(MfcFcRequestUri.RR_NODE_READ.getHttpMethod(),
          MfcFcRequestUri.RR_NODE_READ.getUri(swClusterId, request.getNodeId()) + "?user-type="
              + RestUserTypeOption.OPERATOR.getMessage(),
          null, fcControlAddress, fcControlPort);

      RrNodeReadOwnerResponseBody responseBody = JsonUtil.fromJson(restResponseBase.getResponseBody(),
          RrNodeReadOwnerResponseBody.class, ErrorCode.FC_CONTROL_ERROR);

      checkRestResponseHttpStatusCode(restResponseBase.getHttpStatusCode(), HttpStatus.OK_200,
          responseBody.getErrorCode(), ErrorCode.FC_CONTROL_ERROR);

      return restResponseBase;
    } finally {
      logger.methodEnd();
    }
  }
}
