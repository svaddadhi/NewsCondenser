const express = require("express");
const summarizeText = require("../utils/summarize");
const router = express.Router();
const { getNewsArticles } = require("../controllers/newsController");

router.get("/news", getNewsArticles);

router.post("/summarize", async (req, res) => {
  try {
    const summary = await summarizeText(req.body.content);
    res.json({ summary });
  } catch (error) {
    console.error("Error summarizing article:", error);
    res.status(500).json({ message: "Error summarizing article" });
  }
});

module.exports = router;
