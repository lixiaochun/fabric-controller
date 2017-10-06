package msf.fc.node.interfaces.lagifs.data;

import org.apache.commons.lang.builder.ToStringBuilder;

import com.google.gson.annotations.SerializedName;

import msf.fc.rest.common.AbstractResponseBody;

public class LagIfDeleteResponseBody extends AbstractResponseBody {

  @SerializedName("operation_id")
  private String operationId;

  public String getOperationId() {
    return operationId;
  }

  public void setOperationId(String operationId) {
    this.operationId = operationId;
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }

}