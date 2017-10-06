package msf.fc.common.constant;

public enum CpStatus {

  DEACTIVATE("deactivate", ActiveStatus.INACTIVE, ReserveStatus.NONE),
  ACTIVATE("activate", ActiveStatus.ACTIVE, ReserveStatus.NONE),
  ACTIVATE_RESERVE("activate_reserve", ActiveStatus.INACTIVE, ReserveStatus.ACTIVATE_RESERVE),
  DEACTIVATE_RESERVE("deactivate_reserve", ActiveStatus.ACTIVE, ReserveStatus.DEACTIVATE_RESERVE);

  private String message;
  private ActiveStatus activeStatus;
  private ReserveStatus reserveStatus;

  private CpStatus(String message, ActiveStatus activeStatus, ReserveStatus reserveStatus) {
    this.message = message;
    this.activeStatus = activeStatus;
    this.reserveStatus = reserveStatus;
  }

  public String getMessage() {
    return message;
  }

  public ActiveStatus getActiveStatus() {
    return activeStatus;
  }

  public ReserveStatus getReserveStatus() {
    return reserveStatus;
  }

  public static CpStatus getEnumValueFromMessage(String message) {
    for (CpStatus enumValue : values()) {
      if (enumValue.getMessage().equals(message)) {
        return enumValue;
      }
    }
    return null;
  }

  public static CpStatus getEnumValueFromStatus(Integer activeStatus, Integer reserveStatus) {
    if (activeStatus == null || reserveStatus == null) {
      return null;
    }
    for (CpStatus enumValue : values()) {
      if (enumValue.getActiveStatus().getCode() == activeStatus.intValue()
          && enumValue.getReserveStatus().getCode() == reserveStatus.intValue()) {
        return enumValue;
      }
    }
    return null;
  }
}