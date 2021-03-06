
package msf.fc.rest.ec.node.nodes.operation.data.entity;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

public class NodeUpdateNodeEcEntity {

  @SerializedName("node_id")
  private String nodeId;

  @SerializedName("node_type")
  private String nodeType;

  @SerializedName("cluster_area")
  private String clusterArea;

  @SerializedName("virtual_link")
  private NodeVirtualLinkEcEntity virtualLink;

  @SerializedName("range")
  private NodeRangeEcEntity range;

  public String getNodeId() {
    return nodeId;
  }

  public void setNodeId(String nodeId) {
    this.nodeId = nodeId;
  }

  public String getNodeType() {
    return nodeType;
  }

  public void setNodeType(String nodeType) {
    this.nodeType = nodeType;
  }

  public String getClusterArea() {
    return clusterArea;
  }

  public void setClusterArea(String clusterArea) {
    this.clusterArea = clusterArea;
  }

  public NodeVirtualLinkEcEntity getVirtualLink() {
    return virtualLink;
  }

  public void setVirtualLink(NodeVirtualLinkEcEntity virtualLink) {
    this.virtualLink = virtualLink;
  }

  public NodeRangeEcEntity getRange() {
    return range;
  }

  public void setRange(NodeRangeEcEntity range) {
    this.range = range;
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }

}
