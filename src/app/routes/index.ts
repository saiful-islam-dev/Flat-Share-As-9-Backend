import express from "express";
import { authRouters } from "../modules/auth/auth.routers";
import { requestRouters } from "../modules/request/request.routers";
import { flatRouters } from "../modules/flat/flat.routers";
import { userRouters } from "../modules/user/user.routers";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRouters,
  },
  {
    path: "/user",
    route: userRouters,
  },
  {
    path: "/flat",
    route: flatRouters,
  },
  {
    path: "/request",
    route: requestRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
