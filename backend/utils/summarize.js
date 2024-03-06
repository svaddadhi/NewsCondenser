const OpenAI = require("openai");
const {
  OPENAI_API_KEY,
  OPENAI_DEFAULTS,
  createOpenAiPrompt,
} = require("../utils/constants");

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

async function summarizeText(text) {
  try {
    const completion = await openai.completions.create({
      ...OPENAI_DEFAULTS,
      prompt: createOpenAiPrompt,
    });
    console.log("OpenAI response:", completion.choices[0].text.trim());
    return completion.choices[0].text.trim();
  } catch (error) {
    console.error("Error in text summarization:", error);
    throw error;
  }
}

module.exports = summarizeText;
