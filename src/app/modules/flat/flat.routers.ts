import express from "express";
import { flatController } from "./flat.controller";

const router = express.Router();

router.post("/", flatController.createFlat);
router.get("/", flatController.getFlats);
router.get("/:id", flatController.getFlatById);
router.put("/:id", flatController.updateFlat);
router.delete("/:id", flatController.deleteFlat);

export const flatRouters = router;
