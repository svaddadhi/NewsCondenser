// Requiring the OpenAI package
const OpenAI = require('openai');

// Creating a new instance of the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function summarizeText(text) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Ensure this model is current or adjust as needed
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
    // It might be better to throw the error or handle it so that the caller can decide what to do
    throw error;
  }
}

module.exports = summarizeText;
