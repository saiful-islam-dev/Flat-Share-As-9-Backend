"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routers_1 = require("../modules/auth/auth.routers");
const request_routers_1 = require("../modules/request/request.routers");
const flat_routers_1 = require("../modules/flat/flat.routers");
const user_routers_1 = require("../modules/user/user.routers");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_routers_1.authRouters,
    },
    {
        path: "/user",
        route: user_routers_1.userRouters,
    },
    {
        path: "/flat",
        route: flat_routers_1.flatRouters,
    },
    {
        path: "/request",
        route: request_routers_1.requestRouters,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
