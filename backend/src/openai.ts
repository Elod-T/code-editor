import OpenAI from "openai";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const router = express.Router();

router.post("/", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    res.status(400).send("Bad request");
    return;
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: process.env.OPENAI_SYSTEM_MESSAGE!,
        },
        {
          role: "user",
          content: code,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    res.send(completion.choices[0].message);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

export default router;
