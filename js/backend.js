const openai = require("openai");
const dotenv = require("dotenv");

dotenv.config();
openai.apiKey = process.env.OPENAI_API_KEY;

async function getBashCommand(userInput) {
  const systemprompt = "Convert the following natural language command to a bash command:";
  const userprompt = userInput;

  const message = [
    { role: "system", content: systemprompt },
    { role: "user", content: userprompt },
  ];

  try {
    const response = await openai.ChatCompletion.create({
      model: "gpt-4",
      messages: message,
      temperature: 0.2,
      max_tokens: 4000,
      frequency_penalty: 0.9,
    });

    const gpt_message = response.choices[0].message.content;
    return gpt_message;
  } catch (error) {
    console.error("Error:", error);
    return "An error occurred while processing your request.";
  }
}

module.exports = { getBashCommand };