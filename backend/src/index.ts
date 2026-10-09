import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

//cors part
app.use(cors({ origin: "http://localhost:3000" }));

//json part
app.use(express.json());

//health check part
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "AI Launchpad backend is running" });
});

//start server part
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});