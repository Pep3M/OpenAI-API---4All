const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config()

async function sendMessageToChatGPT(message) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/gpt',
      {
        prompt: message,
        model: 'chat-gpt',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return process.env.OPENAI_API_KEY//response.data;
  } catch (error) {
    //console.error(error);
    return error
  }
}
module.exports = {
  sendMessageToChatGPT
}