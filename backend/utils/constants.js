const API_ENDPOINT = "https://newsapi.org/v2/everything";
const MAX_DESCRIPTION_LENGTH = 100;
const NEWS_API_KEY = process.env.NEWSAPI_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_DEFAULTS = {
  model: "gpt-3.5-turbo-instruct",
  max_tokens: 150,
  // You can add more default properties here or adjust as needed
};

// Function to create prompt with dynamic text
function createOpenAiPrompt(text) {
  return `Summarize this article:\n\n${text}`;
}

const PORT = process.env.PORT || 6000;

module.exports = {
  API_ENDPOINT,
  MAX_DESCRIPTION_LENGTH,
  NEWS_API_KEY,
  OPENAI_API_KEY,
  OPENAI_DEFAULTS,
  createOpenAiPrompt,
  PORT,
};
