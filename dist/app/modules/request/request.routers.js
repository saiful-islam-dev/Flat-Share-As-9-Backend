"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRouters = void 0;
const express_1 = __importDefault(require("express"));
const request_controller_1 = require("./request.controller");
const router = express_1.default.Router();
router.post("/", request_controller_1.requestController.createRequest);
router.get("/flat/:id", request_controller_1.requestController.getRequestsForFlat);
router.get("/user", request_controller_1.requestController.getUserRequests);
router.put("/:id", request_controller_1.requestController.updateRequestStatus);
router.delete("/:id", request_controller_1.requestController.deleteRequest);
exports.requestRouters = router;
