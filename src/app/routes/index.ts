import express from "express";
import { AuthRouters } from "../modules/auth/auth.routers";
import { RequestRouters } from "../modules/request/request.routers";
import { FlatRouters } from "../modules/flat/flat.routers";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRouters,
  },
  {
    path: "/flat",
    route: FlatRouters,
  },
  {
    path: "/request",
    route: RequestRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
