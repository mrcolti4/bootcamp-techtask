import express from "express";
import cors from "cors";
import "dotenv/config.js";

import authRouter from "./user-route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

export default app;
