import express from "express";
import { UserController } from "./user.controller";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidationSchema } from "./user.validation";

const router = express.Router();

router.get(
  "/",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  UserController.getAllUser
);

router.get(
  "/me",

  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  UserController.getMyProfile
);

router.post(
  "/create-user",
  validateRequest(UserValidationSchema.createUserSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  UserController.createUser
);

router.patch(
  "/:id/status",
  validateRequest(UserValidationSchema.updateUserSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  UserController.changeProfileStatus
);

router.patch(
  "/update-my-profile",
  validateRequest(UserValidationSchema.updateUserSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  UserController.updateMyProfile
);

export const userRouters = router;
