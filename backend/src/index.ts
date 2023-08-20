import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import openai from "./openai";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/openai", openai);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
