"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get("/", user_controller_1.UserController.getAllUser);
router.get("/me", user_controller_1.UserController.getMyProfile);
router.post("/create-user", user_controller_1.UserController.createUser);
// router.post(
//   "/create-admin",
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   FileUploadHelper.upload.single("file"),
//   (req: Request, res: Response, next: NextFunction) => {
//     req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
//     return UserController.createAdmin(req, res, next);
//   }
// );
router.patch("/:id/status", user_controller_1.UserController.changeProfileStatus);
router.patch("/update-my-profile", user_controller_1.UserController.updateMyProfile);
exports.userRouters = router;
