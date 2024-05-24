"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatRouters = void 0;
const express_1 = __importDefault(require("express"));
const flat_controller_1 = require("./flat.controller");
const router = express_1.default.Router();
router.post("/", flat_controller_1.flatController.createFlat);
router.get("/", flat_controller_1.flatController.getFlats);
router.get("/:id", flat_controller_1.flatController.getFlatById);
router.put("/:id", flat_controller_1.flatController.updateFlat);
router.delete("/:id", flat_controller_1.flatController.deleteFlat);
exports.flatRouters = router;
