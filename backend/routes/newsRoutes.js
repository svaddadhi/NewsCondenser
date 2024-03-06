const express = require("express");
const axios = require("axios");
const summarizeText = require("../utils/summarize");
const router = express.Router();

router.get("/news", async (req, res) => {
  const { query } = req.query;
  try {
    // Fetch articles from the API
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&apiKey=${process.env.NEWSAPI_KEY}&language=en`
    );
    const maxLength = 100; // Set the maximum length of the description
    // Map articles to include only necessary info and sort them from newest to oldest
    const articles = response.data.articles
      .map((article) => ({
        source: article.source.name,
        title: article.title,
        description:
          article.description && article.description.length > maxLength
            ? article.description.substring(0, maxLength) + "..."
            : article.description,
        url: article.url,
        content: article.content,
        publishedAt: article.publishedAt,
        formattedDate: new Date(article.publishedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ), // Adding formatted date
      }))
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Send the sorted articles to the frontend
    res.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
});

router.post("/summarize", async (req, res) => {
  const { content } = req.body;
  console.log("Received content for summarization:", req.body.content); // Debug log
  try {
    const summary = await summarizeText(content);
    res.json({ summary });
  } catch (error) {
    console.error("Error summarizing article:", error);
    res.status(500).json({ message: "Error summarizing article" });
  }
});

module.exports = router;
