
package msf.mfc.rest.v1.internal.common.status;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import msf.mfcfc.common.constant.OperationType;
import msf.mfcfc.common.constant.SystemInterfaceType;
import msf.mfcfc.common.log.MsfLogger;
import msf.mfcfc.core.scenario.RestResponseBase;
import msf.mfcfc.core.status.scenario.InternalSystemStatusReadScenario;
import msf.mfcfc.core.status.scenario.InternalSystemStatusUpdateScenario;
import msf.mfcfc.core.status.scenario.data.InternalSystemStatusRequest;
import msf.mfcfc.rest.common.AbstractRestHandler;

/**
 * REST request handler class of system status via Intra-cluster IF.
 *
 * @author NTT
 */
@Path("/v1/internal/MSFcontroller")
public class MfcInternalSystemStatusHandler extends AbstractRestHandler {

  private static final MsfLogger logger = MsfLogger.getInstance(MfcInternalSystemStatusHandler.class);

  /**
   * System status modification (internal).
   *
   * @param requestBody
   *          Request message body
   * @return response data
   */
  @PUT
  @Path("/status")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public Response update(String requestBody) {
    try {
      logger.methodStart();
      loggingRequestReceived();
      loggingRequestJsonBody(requestBody);
      InternalSystemStatusRequest request = new InternalSystemStatusRequest(requestBody, null, null);

      setCommonData(request);

      InternalSystemStatusUpdateScenario scenario = new InternalSystemStatusUpdateScenario(OperationType.PRIORITY,
          SystemInterfaceType.INTERNAL);
      RestResponseBase restResponseBase = scenario.execute(request);
      return createResponse(restResponseBase);

    } finally {
      logger.methodEnd();
    }
  }

  /**
   * System status change (internal).
   *
   * @return response data
   */
  @GET
  @Path("/status")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public Response read() {
    try {
      logger.methodStart();
      loggingRequestReceived();
      InternalSystemStatusRequest request = new InternalSystemStatusRequest(null, null, null);

      setCommonData(request);

      InternalSystemStatusReadScenario scenario = new InternalSystemStatusReadScenario(OperationType.PRIORITY,
          SystemInterfaceType.INTERNAL);
      RestResponseBase restResponseBase = scenario.execute(request);
      return createResponse(restResponseBase);

    } finally {
      logger.methodEnd();
    }
  }
}
