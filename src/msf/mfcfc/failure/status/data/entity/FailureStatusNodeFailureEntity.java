
package msf.mfcfc.failure.status.data.entity;

import java.io.Serializable;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

import msf.mfcfc.common.constant.FailureStatus;

public class FailureStatusNodeFailureEntity implements Serializable {

  @SerializedName("cluster_id")
  private String clusterId;

  @SerializedName("fabric_type")
  private String fabricType;

  @SerializedName("node_id")
  private String nodeId;

  @SerializedName("failure_status")
  private String failureStatus;

  public String getClusterId() {
    return clusterId;
  }

  public void setClusterId(String clusterId) {
    this.clusterId = clusterId;
  }

  public String getFabricType() {
    return fabricType;
  }

  public void setFabricType(String fabricType) {
    this.fabricType = fabricType;
  }

  public String getNodeId() {
    return nodeId;
  }

  public void setNodeId(String nodeId) {
    this.nodeId = nodeId;
  }

  public String getFailureStatus() {
    return failureStatus;
  }

  public void setFailureStatus(String failureStatus) {
    this.failureStatus = failureStatus;
  }

  public FailureStatus getFailureStatusEnum() {
    return FailureStatus.getEnumFromMessage(failureStatus);
  }

  public void setFailureStatusEnum(FailureStatus failureStatus) {
    this.failureStatus = failureStatus.getMessage();
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }
}
