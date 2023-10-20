import { Request, Response } from "express";
import { getStats, valAnomality } from "./route";
const express = require("express");

const app = express();
app.use(express.json());

app.get("/stats", async (req: Request, res: Response) => {
  const response = await getStats();
  res.send(response);
});

app.post("/validate-anomaly", async (req: Request, res: Response) => {
  const response = await valAnomality(req.body);
  res.send(response);
});

export default app;
