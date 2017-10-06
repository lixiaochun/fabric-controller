package msf.fc.node.interfaces.physicalifs.data.entity;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

public class PhysicalIfEntity {

  @SerializedName("physical_if_id")
  private String physicalIfId;

  @SerializedName("opposite_if")
  private OppositePhysicalIfEntity oppositeIf;

  @SerializedName("speed")
  private String speed;

  @SerializedName("if_name")
  private String ifName;

  public String getPhysicalIfId() {
    return physicalIfId;
  }

  public void setPhysicalIfId(String physicalIfId) {
    this.physicalIfId = physicalIfId;
  }

  public OppositePhysicalIfEntity getOppositeIf() {
    return oppositeIf;
  }

  public void setOppositeIf(OppositePhysicalIfEntity oppositeIf) {
    this.oppositeIf = oppositeIf;
  }

  public String getSpeed() {
    return speed;
  }

  public void setSpeed(String speed) {
    this.speed = speed;
  }

  public String getIfName() {
    return ifName;
  }

  public void setIfName(String ifName) {
    this.ifName = ifName;
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }

}