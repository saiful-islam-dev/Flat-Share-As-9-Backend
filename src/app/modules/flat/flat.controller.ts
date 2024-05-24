import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FlatServices } from "./flat.services";

const createFlat = catchAsync(async (req: Request, res: Response) => {
  const result = await FlatServices.createFlatInToDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const getFlats = catchAsync(async (req: Request, res: Response) => {
  const result = await FlatServices.getFlats(req.params);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const getFlatById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FlatServices.getFlatById(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const updateFlat = catchAsync(async (req: Request, res: Response) => {
  const result = await FlatServices.updateFlat(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});
const deleteFlat = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FlatServices.deleteFlat(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

export const flatController = {
  createFlat,
  getFlatById,
  getFlats,
  updateFlat,
  deleteFlat,
};
