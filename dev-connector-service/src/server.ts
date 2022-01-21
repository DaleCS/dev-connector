import express from "express";
import cors from "cors";

import { applyRoutes } from "./routes";

const app = express();

// Express server configurations
app.use(express.json());
app.use(cors());

applyRoutes(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Dev-connector service up and listening at port: ${PORT}`);
});
