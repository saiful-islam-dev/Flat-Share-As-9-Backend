import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { requestServices } from "./request.services";

const createRequest = catchAsync(async (req: Request, res: Response) => {
  const result = await requestServices.createRequestInToDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const getRequestsForFlat = catchAsync(async (req: Request, res: Response) => {
  const result = await requestServices.getRequestsForFlat(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const getUserRequests = catchAsync(async (req: Request, res: Response) => {

  const result = await requestServices.getUserRequests(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const updateRequestStatus = catchAsync(async (req: Request, res: Response) => {
  const result = await requestServices.updateRequestStatus(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const deleteRequest = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await requestServices.deleteRequest(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

export const requestController = {
  createRequest,
  getRequestsForFlat,
  getUserRequests,
  updateRequestStatus,
  deleteRequest,
};
