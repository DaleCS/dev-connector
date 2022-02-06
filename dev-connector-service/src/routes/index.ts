import { Express } from "express";

import { authRoutes } from "./auth.routes";
import { userRoutes } from "./users.routes";
import { profilesRoutes } from "./profiles.routes";

export function applyRoutes(app: Express): void {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/profiles", profilesRoutes);
}
