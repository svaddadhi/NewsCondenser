// /utils/summarize.js
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function summarizeText(text) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Make sure to use the latest model
      prompt: `Summarize this article:\n\n${text}`,
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error in text summarization:", error);
    return "Summarization error.";
  }
}

module.exports = summarizeText;
