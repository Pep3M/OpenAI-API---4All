const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const listModels = async () => {
  const result = await openai.listModels();
  return result.data;
};

const createCompletion = async (prompt) => {
  let response = {};

  try {
    response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 2500,
      temperature: 0
    });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: openai.js:27 ~ createCompletion ~ error", error);
    response.error = true;
  }
  return response;
};

const createImage = async (prompt) => {
  let response = {};

  try {
    response = await openai.createImage({
      prompt,
      n: 2,
      size: "512x512"
    });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: openai.js:43 ~ createImage ~ error", error);
    response.error = true;
  }
  return response;
};

module.exports = {
  listModels,
  createCompletion,
  createImage
};
