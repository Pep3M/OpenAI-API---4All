const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

const getOpenAiInstance = (apiKey) => {
  const configuration = new Configuration({
    apiKey
  });
  return new OpenAIApi(configuration);
}

const listModels = async () => {
  const openai = getOpenAiInstance(apiKey);
  const result = await openai.listModels();
  return result.data;
};

const createCompletion = async (prompt, apiKey) => {
  let response = {};

  try {
    const openai = getOpenAiInstance(apiKey);
    response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 2500,
      temperature: 0
    });
    return response.data;
  } catch (error) {
    response.error = true;
  }
  return response;
};

const createImage = async (prompt, apiKey) => {
  let response = {};

  try {
    const openai = getOpenAiInstance(apiKey);
    response = await openai.createImage({
      prompt,
      n: 2,
      size: "512x512"
    });
    return response.data;
  } catch (error) {
    response.error = true;
  }
  return response;
};

module.exports = {
  listModels,
  createCompletion,
  createImage
};
