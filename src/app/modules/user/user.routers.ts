import express from "express";
import { UserController } from "./user.controller";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";

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

router.post("/create-user", UserController.createUser);

// router.post(
//   "/create-admin",
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   FileUploadHelper.upload.single("file"),
//   (req: Request, res: Response, next: NextFunction) => {
//     req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
//     return UserController.createAdmin(req, res, next);
//   }
// );

router.patch("/:id/status", UserController.changeProfileStatus);

router.patch(
  "/update-my-profile",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  UserController.updateMyProfile
);

export const userRouters = router;
