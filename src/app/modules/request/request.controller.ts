import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { requestServices } from "./request.services";
import { JwtPayload } from "jsonwebtoken";

const createRequest = catchAsync(async (req: Request, res: Response) => {
  const userId: string = (req.user as JwtPayload).userId;
  const result = await requestServices.createRequestInToDB(req.body, userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

const getRequestsForFlat = catchAsync(async (req: Request, res: Response) => {
  const result = await requestServices.getRequestsForFlat();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

const getUserRequests = catchAsync(async (req: Request, res: Response) => {
  const userId: string = (req.user as JwtPayload).userId;
  console.log(userId);
  const result = await requestServices.getUserRequests(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

const updateRequestStatus = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await requestServices.updateRequestStatus(id, req.body);
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
