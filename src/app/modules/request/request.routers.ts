import express from "express";
import { requestController } from "./request.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { RequestValidationSchema } from "./request.validition";

const router = express.Router();

router.post(
  "/",
  validateRequest(RequestValidationSchema.createRequestSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  requestController.createRequest
);

router.get(
  "/",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  requestController.getRequestsForFlat
);

router.get(
  "/user",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  requestController.getUserRequests
);

router.patch(
  "/:id",
  validateRequest(RequestValidationSchema.updateRequestSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  requestController.updateRequestStatus
);

router.delete(
  "/:id",
  validateRequest(RequestValidationSchema.deleteRequestSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  requestController.deleteRequest
);

export const requestRouters = router;
