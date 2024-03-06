const express = require('express');
const axios = require('axios');
const summarizeText = require('../utils/summarize');
const router = express.Router();

router.get('/news', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${process.env.NEWSAPI_KEY}`);
    const articles = response.data.articles.map(article => ({
      source: article.source.name,
      title: article.title,
      description: article.description,
      url: article.url,
      content: article.content // Consider what you'll need for summarization
    }));
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
});


router.post('/summarize', async (req, res) => {
  const { content } = req.body;
  console.log('Received content for summarization:', req.body.content); // Debug log
  try {
    const summary = await summarizeText(content);
    res.json({ summary });
  } catch (error) {
    console.error("Error summarizing article:", error);
    res.status(500).json({ message: 'Error summarizing article' });
  }
});

module.exports = router;
