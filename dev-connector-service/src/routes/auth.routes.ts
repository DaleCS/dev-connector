import express from "express";
import { testController } from "../controllers/auth.controller";

export const authRoutes = express.Router();

authRoutes.post("/", testController);
