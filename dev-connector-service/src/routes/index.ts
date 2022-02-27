import { Express } from "express";

import { authRoutes } from "./auth.route";
import { userRoutes } from "./users.route";
import { profilesRoutes } from "./profiles.route";

export function applyRoutes(app: Express): void {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/profiles", profilesRoutes);
}
