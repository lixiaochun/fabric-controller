
package msf.fc.rest.ec.node.interfaces.vlan.data.entity;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

public class VlanIfL2VlanOptionEcEntity {

  @SerializedName("vrf_id")
  private Integer vrfId;

  @SerializedName("qos")
  private VlanIfQosUpdateEcEntity qos;

  public Integer getVrfId() {
    return vrfId;
  }

  public void setVrfId(Integer vrfId) {
    this.vrfId = vrfId;
  }

  public VlanIfQosUpdateEcEntity getQos() {
    return qos;
  }

  public void setQos(VlanIfQosUpdateEcEntity qos) {
    this.qos = qos;
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }

}
