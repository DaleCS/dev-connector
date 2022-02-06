import express from "express";
import { testController } from "../controllers/profiles.controller";

export const profilesRoutes = express.Router();

profilesRoutes.post("/", testController);
