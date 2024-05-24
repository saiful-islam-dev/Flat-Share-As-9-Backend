import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.services";

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUser();
  console.log({ result });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  const id = req.body.id;
  const result = await UserServices.getMyProfile(id);
  console.log({ result });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully!",
    data: result,
  });
});
const changeProfileStatus = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.changeProfileStatus(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.updateMyProfile(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

export const UserController = {
  getAllUser,
  getMyProfile,
  createUser,
  changeProfileStatus,
  updateMyProfile,
};
