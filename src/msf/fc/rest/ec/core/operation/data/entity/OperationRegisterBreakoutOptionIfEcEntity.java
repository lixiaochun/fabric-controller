package msf.fc.rest.ec.core.operation.data.entity;

import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;


public class OperationRegisterBreakoutOptionIfEcEntity {

  
  @SerializedName("node_id")
  private String nodeId;

  
  @SerializedName("base_physical_if_id")
  private String basePhysicalIfId;

  
  @SerializedName("speed")
  private String speed;

  
  @SerializedName("breakout_if_id")
  private List<String> breakoutIfIdList;

  
  public String getNodeId() {
    return nodeId;
  }

  
  public void setNodeId(String nodeId) {
    this.nodeId = nodeId;
  }

  
  public String getBasePhysicalIfId() {
    return basePhysicalIfId;
  }

  
  public void setBasePhysicalIfId(String basePhysicalIfId) {
    this.basePhysicalIfId = basePhysicalIfId;
  }

  
  public String getSpeed() {
    return speed;
  }

  
  public void setSpeed(String speed) {
    this.speed = speed;
  }

  
  public List<String> getBreakoutIfIdList() {
    return breakoutIfIdList;
  }

  
  public void setBreakoutIfIdList(List<String> breakoutIfIdList) {
    this.breakoutIfIdList = breakoutIfIdList;
  }

  
  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }
}