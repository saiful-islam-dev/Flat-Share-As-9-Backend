import express from "express";
import { flatController } from "./flat.controller";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { FlatValidationSchema } from "./flat.validdaiton";

const router = express.Router();

router.post(
  "/create-flat",
  validateRequest(FlatValidationSchema.createFlatSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  flatController.createFlat
);

router.get(
  "/",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  flatController.getFlats
);

router.get(
  "/:id",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  flatController.getFlatById
);

router.patch(
  "/:id",
  validateRequest(FlatValidationSchema.updateFlatSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  flatController.updateFlat
);

router.delete(
  "/:id",
  validateRequest(FlatValidationSchema.deleteFlatSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  flatController.deleteFlat
);

export const flatRouters = router;
