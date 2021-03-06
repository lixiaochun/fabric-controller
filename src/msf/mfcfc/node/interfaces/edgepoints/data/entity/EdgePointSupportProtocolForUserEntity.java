
package msf.mfcfc.node.interfaces.edgepoints.data.entity;

import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

public class EdgePointSupportProtocolForUserEntity {

  @SerializedName("L2")
  private Boolean l2;

  @SerializedName("q_in_q_type")
  private String qInQType;

  @SerializedName("L3")
  private Boolean l3;

  @SerializedName("L3_protocols")
  private List<String> l3ProtocolList;

  public Boolean getL2() {
    return l2;
  }

  public void setL2(Boolean l2) {
    this.l2 = l2;
  }

  public String getQInQType() {
    return qInQType;
  }

  public void setQInQType(String qInQType) {
    this.qInQType = qInQType;
  }

  public Boolean getL3() {
    return l3;
  }

  public void setL3(Boolean l3) {
    this.l3 = l3;
  }

  public List<String> getL3ProtocolList() {
    return l3ProtocolList;
  }

  public void setL3ProtocolList(List<String> l3ProtocolList) {
    this.l3ProtocolList = l3ProtocolList;
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }
}
