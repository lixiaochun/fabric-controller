
package msf.mfcfc.services.ctrlstsnotify.scenario.data.entity;

import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

import msf.mfcfc.services.ctrlstsnotify.common.constant.ControllerLogInnerType;
import msf.mfcfc.services.ctrlstsnotify.common.constant.LogLevelType;

public class ControllerLogInnerNotificationEntity {

  @SerializedName("controller_type")
  private String controllerType;

  @SerializedName("log_level")
  private String logLevel;

  @SerializedName("log")
  private List<String> logList;

  public String getControllerType() {
    return controllerType;
  }

  public void setControllerType(String controllerType) {
    this.controllerType = controllerType;
  }

  public String getLogLevel() {
    return logLevel;
  }

  public void setLogLevel(String logLevel) {
    this.logLevel = logLevel;
  }

  public List<String> getLogList() {
    return logList;
  }

  public void setLogList(List<String> logList) {
    this.logList = logList;
  }

  public ControllerLogInnerType getControllerTypeEnum() {
    return ControllerLogInnerType.getEnumFromMessage(controllerType);
  }

  public void setControllerTypeEnum(ControllerLogInnerType controllerType) {
    this.controllerType = controllerType.getMessage();
  }

  public LogLevelType getLogLevelEnum() {
    return LogLevelType.getEnumFromMessage(logLevel);
  }

  public void setLogLevelEnum(LogLevelType logLevel) {
    this.logLevel = logLevel.getMessage();
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }
}