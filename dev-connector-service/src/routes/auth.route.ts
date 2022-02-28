import express from "express";
import { registerController } from "../controllers/auth.controller";

export const authRoutes = express.Router();

authRoutes.post("/", registerController);
