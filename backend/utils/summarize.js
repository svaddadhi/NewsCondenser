const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function summarizeText(text) {
  try {
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct", // Make sure to update the model if a newer one is available
      prompt: `Summarize this article:\n\n${text}`,
      max_tokens: 150,
    });
    console.log("OpenAI response:", completion.choices[0].text.trim()); // Debug success
    return completion.choices[0].text.trim();
  } catch (error) {
    console.error("Error in text summarization:", error);
    throw error;
  }
}

module.exports = summarizeText;
