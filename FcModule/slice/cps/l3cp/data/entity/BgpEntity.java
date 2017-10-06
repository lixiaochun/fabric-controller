package msf.fc.slice.cps.l3cp.data.entity;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

import msf.fc.common.constant.RoleType;

public class BgpEntity {
  @SerializedName("role")
  private String role;

  @SerializedName("neighbor_as")
  private Integer neighborAs;

  @SerializedName("neighbor_ipv4_addr")
  private String neighborIpv4Addr;

  @SerializedName("neighbor_ipv6_addr")
  private String neighborIpv6Addr;

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public Integer getNeighborAs() {
    return neighborAs;
  }

  public void setNeighborAs(Integer neighborAs) {
    this.neighborAs = neighborAs;
  }

  public String getNeighborIpv4Addr() {
    return neighborIpv4Addr;
  }

  public void setNeighborIpv4Addr(String neighborIpv4Addr) {
    this.neighborIpv4Addr = neighborIpv4Addr;
  }

  public String getNeighborIpv6Addr() {
    return neighborIpv6Addr;
  }

  public void setNeighborIpv6Addr(String neighborIpv6Addr) {
    this.neighborIpv6Addr = neighborIpv6Addr;
  }

  public RoleType getRoleEnum() {
    return RoleType.getEnumFromMessage(role);
  }

  public void setRoleEnum(RoleType role) {
    this.role = role.getMessage();
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }

}