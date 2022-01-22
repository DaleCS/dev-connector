import express, { Express } from "express";
import cors from "cors";

import { connectDB } from "./db";
import { applyRoutes } from "./routes";

connectDB();

const app: Express = express();

// Express server configurations
app.use(express.json());
app.use(cors());

applyRoutes(app);

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, (): void => {
  console.log(`Dev-connector service up and listening at port: ${PORT}`);
});
