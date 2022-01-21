import { Express } from "express";

import { userRoutes } from "./users.routes";

export function applyRoutes(app: Express): void {
  app.use("/api/v1/users", userRoutes);
}
