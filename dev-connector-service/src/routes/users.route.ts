import express from "express";
import { testController } from "../controllers/users.controller";

export const userRoutes = express.Router();

userRoutes.post("/", testController);
