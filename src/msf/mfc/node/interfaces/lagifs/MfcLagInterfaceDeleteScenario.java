
package msf.mfc.node.interfaces.lagifs;

import org.eclipse.jetty.http.HttpStatus;

import msf.mfcfc.common.constant.ErrorCode;
import msf.mfcfc.common.constant.NodeType;
import msf.mfcfc.common.constant.OperationType;
import msf.mfcfc.common.constant.SynchronousType;
import msf.mfcfc.common.constant.SystemInterfaceType;
import msf.mfcfc.common.exception.MsfException;
import msf.mfcfc.common.log.MsfLogger;
import msf.mfcfc.common.util.ParameterCheckUtil;
import msf.mfcfc.core.scenario.RestResponseBase;
import msf.mfcfc.node.interfaces.lagifs.data.LagIfDeleteResponseBody;
import msf.mfcfc.node.interfaces.lagifs.data.LagIfRequest;

/**
 * Implementation class for Lag interface deletion.
 *
 * @author NTT
 *
 */
public class MfcLagInterfaceDeleteScenario extends MfcAbstractLagInterfaceScenarioBase<LagIfRequest> {

  private static final MsfLogger logger = MsfLogger.getInstance(MfcLagInterfaceDeleteScenario.class);

  private LagIfRequest request;

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
  public MfcLagInterfaceDeleteScenario(OperationType operationType, SystemInterfaceType systemInterfaceType) {
    this.operationType = operationType;
    this.systemIfType = systemInterfaceType;

    this.syncType = SynchronousType.ASYNC;
    this.lowerSystemSyncType = SynchronousType.ASYNC;
  }

  @Override
  protected void checkParameter(LagIfRequest request) throws MsfException {

    try {
      logger.methodStart(new String[] { "request" }, new Object[] { request });

      ParameterCheckUtil.checkNumericId(request.getClusterId(), ErrorCode.PARAMETER_VALUE_ERROR);
      ParameterCheckUtil.checkNotNull(NodeType.getEnumFromPluralMessage(request.getFabricType()));
      ParameterCheckUtil.checkNumericId(request.getNodeId(), ErrorCode.RELATED_RESOURCE_NOT_FOUND);
      ParameterCheckUtil.checkNumericId(request.getLagIfId(), ErrorCode.TARGET_RESOURCE_NOT_FOUND);
      ParameterCheckUtil.checkIpv4Address(request.getNotificationAddress());
      ParameterCheckUtil.checkPortNumber(request.getNotificationPort());

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

      MfcLagInterfaceDeleteRunner deleteRunner = new MfcLagInterfaceDeleteRunner(request);
      execAsyncRunner(deleteRunner);

      responseBase = responseLagInterfaceDeleteData();
      return responseBase;
    } finally {
      logger.methodEnd();
    }
  }

  private RestResponseBase responseLagInterfaceDeleteData() {
    try {
      logger.methodStart();
      LagIfDeleteResponseBody body = new LagIfDeleteResponseBody();
      body.setOperationId(getOperationId());
      return createRestResponse(body, HttpStatus.ACCEPTED_202);
    } finally {
      logger.methodEnd();
    }
  }
}
