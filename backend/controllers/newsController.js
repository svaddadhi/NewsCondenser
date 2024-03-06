const axios = require("axios");
const {
  API_ENDPOINT,
  MAX_DESCRIPTION_LENGTH,
  NEWS_API_KEY,
} = require("../utils/constants");

async function getNewsArticles(req, res) {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `${API_ENDPOINT}?q=${encodeURIComponent(
        query
      )}&apiKey=${NEWS_API_KEY}&language=en`
    );
    const articles = formatArticles(response.data.articles);
    res.json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
}

function formatArticles(articles) {
  return articles
    .map((article) => ({
      source: article.source.name,
      title: article.title,
      description:
        article.description &&
        article.description.length > MAX_DESCRIPTION_LENGTH
          ? article.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
          : article.description,
      url: article.url,
      content: article.content,
      publishedAt: article.publishedAt,
      formattedDate: new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }))
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

module.exports = { getNewsArticles };
