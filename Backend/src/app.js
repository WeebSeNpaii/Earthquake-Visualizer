import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import earthquakeRoutes from "./routes/earthquakeRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/earthquakes", earthquakeRoutes);

export default app;
