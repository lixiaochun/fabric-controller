
package msf.mfc.core.status;

import msf.mfc.common.config.MfcConfigManager;
import msf.mfc.common.config.type.system.NoticeDestInfoStatus;
import msf.mfcfc.common.config.ConfigManager;
import msf.mfcfc.common.constant.BlockadeStatus;
import msf.mfcfc.common.constant.ControllerEvent;
import msf.mfcfc.common.constant.ControllerType;
import msf.mfcfc.common.constant.ServiceStatus;
import msf.mfcfc.common.data.SystemStatus;
import msf.mfcfc.common.log.MsfLogger;
import msf.mfcfc.core.scenario.RestRequestBase;
import msf.mfcfc.core.status.SystemStatusManager;
import msf.mfcfc.core.status.scenario.data.SystemStatusNotifyRequestBody;
import msf.mfcfc.core.status.scenario.data.entity.SystemStatusControllerNotifyEntity;
import msf.mfcfc.rest.common.JsonUtil;

/**
 * Class to manage the system status. <br>
 * Execute the initialization, acquisition and modify of the system status.
 *
 * @author NTT
 *
 */
public final class MfcSystemStatusManager extends SystemStatusManager {

  private static final MsfLogger logger = MsfLogger.getInstance(MfcSystemStatusManager.class);

  private MfcSystemStatusManager() {
  }

  /**
   * Return the instance of MfcSystemStatusManager
   *
   * @return MfcSystemStatusManager instance
   */
  public static MfcSystemStatusManager getInstance() {
    try {
      logger.methodStart();
      if (instance == null) {
        instance = new MfcSystemStatusManager();
      }
      return (MfcSystemStatusManager) instance;
    } finally {
      logger.methodEnd();
    }
  }

  /**
   * Execute the status notification process.
   *
   * @param tmpUpdateStatus
   *          System status information after modification
   */
  @Override
  public void statusNotifyProcess(SystemStatus tmpUpdateStatus) {

    String event = checkStatusNotify(tmpUpdateStatus);
    if (event != null && ConfigManager.getInstance() instanceof MfcConfigManager) {
      RestRequestBase request = createRequest(event);

      for (NoticeDestInfoStatus noticeDestInfo : MfcConfigManager.getInstance().getSystemConfStatus()
          .getNoticeDestInfo()) {
        sendStatusNotify(request, noticeDestInfo);
      }
    }
  }

  private String checkStatusNotify(SystemStatus tmpUpdateStatus) {

    String event = null;

    if (ServiceStatus.STARTED.getMessage().equals(status.getServiceStatusEnum().getMessage())
        && ServiceStatus.SWITCHING.getMessage().equals(tmpUpdateStatus.getServiceStatusEnum().getMessage())) {
      event = ControllerEvent.START_SYSTEM_SWITCHING.getMessage();
    } else if (ServiceStatus.SWITCHING.getMessage().equals(status.getServiceStatusEnum().getMessage())
        && ServiceStatus.STARTED.getMessage().equals(tmpUpdateStatus.getServiceStatusEnum().getMessage())) {
      event = ControllerEvent.END_SYSTEM_SWITCHING.getMessage();
    } else if (BlockadeStatus.NONE.getMessage().equals(status.getBlockadeStatusEnum().getMessage())
        && BlockadeStatus.BLOCKADE.getMessage().equals(tmpUpdateStatus.getBlockadeStatusEnum().getMessage())) {
      event = ControllerEvent.START_BLOCKADE.getMessage();
    } else if (BlockadeStatus.BLOCKADE.getMessage().equals(status.getBlockadeStatusEnum().getMessage())
        && BlockadeStatus.NONE.getMessage().equals(tmpUpdateStatus.getBlockadeStatusEnum().getMessage())) {
      event = ControllerEvent.END_BLOCKADE.getMessage();
    }
    return event;
  }

  private RestRequestBase createRequest(String event) {

    SystemStatusControllerNotifyEntity controller = new SystemStatusControllerNotifyEntity();
    controller.setControllerType(ControllerType.MFC.getMessage());
    controller.setEvent(event);

    SystemStatusNotifyRequestBody requestBody = new SystemStatusNotifyRequestBody();
    requestBody.setController(controller);

    RestRequestBase requestBase = new RestRequestBase();
    requestBase.setRequestBody(JsonUtil.toJson(requestBody));

    return requestBase;
  }

  private void sendStatusNotify(RestRequestBase request, NoticeDestInfoStatus noticeDestInfo) {

    int noticeRetryNum = MfcConfigManager.getInstance().getSystemConfStatus().getNoticeRetryNum();
    int noticeTimeout = MfcConfigManager.getInstance().getSystemConfStatus().getNoticeTimeout();

    for (int retryNum = 0; retryNum < noticeRetryNum + 1; retryNum++) {
      if (sendStatus(request, noticeDestInfo.getNoticeAddress(), noticeDestInfo.getNoticePort(),
          noticeTimeout) != null) {
        break;
      }
    }
  }

}
