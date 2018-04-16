
package msf.mfc.rest.v1.slices.slice;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import msf.mfc.slice.slices.l3slice.MfcL3SliceCreateScenario;
import msf.mfc.slice.slices.l3slice.MfcL3SliceDeleteScenario;
import msf.mfc.slice.slices.l3slice.MfcL3SliceReadListScenario;
import msf.mfc.slice.slices.l3slice.MfcL3SliceReadScenario;
import msf.mfc.slice.slices.l3slice.MfcL3SliceUpdateScenario;
import msf.mfcfc.common.constant.OperationType;
import msf.mfcfc.common.constant.SystemInterfaceType;
import msf.mfcfc.common.log.MsfLogger;
import msf.mfcfc.core.scenario.RestResponseBase;
import msf.mfcfc.rest.common.AbstractRestHandler;
import msf.mfcfc.slice.slices.l3slice.data.L3SliceRequest;

/**
 * REST request handler class for L3 slice control (slice management function).
 *
 * @author NTT
 *
 */
@Path("/v1/slices")
public class MfcL3SliceHandler extends AbstractRestHandler {

  private static final MsfLogger logger = MsfLogger.getInstance(MfcL3SliceHandler.class);

  /**
   * L3 slice addition.
   *
   * @param requestBody
   *          Request message body
   * @return response
   */
  @POST
  @Path("/l3vpn")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public Response create(String requestBody) {
    try {
      logger.methodStart();
      loggingRequestReceived();
      loggingRequestJsonBody(requestBody);
      L3SliceRequest request = new L3SliceRequest(requestBody, null, null, null, null);

      setCommonData(request);

      MfcL3SliceCreateScenario scenario = new MfcL3SliceCreateScenario(OperationType.NORMAL,
          SystemInterfaceType.EXTERNAL);
      RestResponseBase restResponseBase = scenario.execute(request);
      return createResponse(restResponseBase);

    } finally {
      logger.methodEnd();
    }
  }

  /**
   * L3 slice modification.
   *
   * @param sliceId
   *          Slice ID (URI parameter)
   * @param notificationAddress
   *          Operation completion notification address
   * @param notificationPort
   *          Operation completion notification port
   * @param requestBody
   *          Request message body
   * @return response data
   */
  @PUT
  @Path("/l3vpn/{slice_id}")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public Response update(@PathParam("slice_id") String sliceId,
      @QueryParam("notification_address") String notificationAddress,
      @QueryParam("notification_port") String notificationPort, String requestBody) {
    try {
      logger.methodStart();
      loggingRequestReceived();
      L3SliceRequest request = new L3SliceRequest(requestBody, notificationAddress, notificationPort, sliceId, null);

      setCommonData(request);

      MfcL3SliceUpdateScenario scenario = new MfcL3SliceUpdateScenario(OperationType.NORMAL,
          SystemInterfaceType.EXTERNAL);
      RestResponseBase restResponseBase = scenario.execute(request);
      return createResponse(restResponseBase);

    } finally {
      logger.methodEnd();
    }
  }

  /**
   * L3 slice deletion.
   *
   * @param sliceId
   *          Slice ID (URI parameter)
   * @return response data
   */
  @DELETE
  @Path("/l3vpn/{slice_id}")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public Response delete(@PathParam("slice_id") String sliceId) {
    try {
      logger.methodStart();
      loggingRequestReceived();
      L3SliceRequest request = new L3SliceRequest(null, null, null, sliceId, null);

      setCommonData(request);

      MfcL3SliceDeleteScenario scenario = new MfcL3SliceDeleteScenario(OperationType.NORMAL,
          SystemInterfaceType.EXTERNAL);
      RestResponseBase restResponseBase = scenario.execute(request);
      return createResponse(restResponseBase);

    } finally {
      logger.methodEnd();
    }

  }

  /**
   * L3 slice information acquisition.
   *
   * @param sliceId
   *          Slice ID (URI parameter)
   * @return response data
   */
  @GET
  @Path("/l3vpn/{slice_id}")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public Response read(@PathParam("slice_id") String sliceId) {
    try {
      logger.methodStart();
      loggingRequestReceived();
      L3SliceRequest request = new L3SliceRequest(null, null, null, sliceId, null);

      setCommonData(request);

      MfcL3SliceReadScenario scenario = new MfcL3SliceReadScenario(OperationType.NORMAL, SystemInterfaceType.EXTERNAL);
      RestResponseBase restResponseBase = scenario.execute(request);
      return createResponse(restResponseBase);

    } finally {
      logger.methodEnd();
    }
  }

  /**
   * L3 slice information list acquisition.
   *
   * @param format
   *          Information type to acquire (optional parameter)
   * @return response data
   */
  @GET
  @Path("/l3vpn")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public Response readList(@QueryParam("format") String format) {
    try {
      logger.methodStart();
      loggingRequestReceived();
      L3SliceRequest request = new L3SliceRequest(null, null, null, null, format);

      setCommonData(request);

      MfcL3SliceReadListScenario scenario = new MfcL3SliceReadListScenario(OperationType.NORMAL,
          SystemInterfaceType.EXTERNAL);
      RestResponseBase restResponseBase = scenario.execute(request);
      return createResponse(restResponseBase);

    } finally {
      logger.methodEnd();
    }
  }
}
