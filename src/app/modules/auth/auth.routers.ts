import express from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

router.post(
  "/refresh-token",
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

router.post(
  "/change-password",
  validateRequest(AuthValidation.changePasswordZodSchema),
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN, USER_ROLE.USER),
  AuthController.changePassword
);

export const authRouters = router;
