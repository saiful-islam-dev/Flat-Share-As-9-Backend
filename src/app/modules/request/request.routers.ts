import express from "express";
import { requestController } from "./request.controller";

const router = express.Router();

router.post("/", requestController.createRequest);
router.get("/flat/:id", requestController.getRequestsForFlat);
router.get("/user", requestController.getUserRequests);
router.put("/:id", requestController.updateRequestStatus);
router.delete("/:id", requestController.deleteRequest);

export const requestRouters = router;
