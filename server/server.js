const express = require("express");
const axios = require("axios");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { listModels, createCompletion } = require("../OpenAi/openai");
const { sendMessageToChatGPT } = require("../OpenAi/auxiliar");
//const { example } = require("../OpenAi/chatgpt");

const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;
const CHATGPT_API_URL = "https://api.openai.com/v1/models/chatpt/completions";

app.use(
  cors({
    origin: "*"
  })
);
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Configurar una ruta de API para enviar un mensaje al ChatGPT
app.post("/send-message", async (req, res) => {
  try {
    // Obtener el mensaje enviado a la API desde el cuerpo de la solicitud
    const message = req.body.message;

    // Utilizar Axios para enviar una solicitud POST al ChatGPT API
    // Reemplaza <CHATGPT_API_URL> con la URL del ChatGPT API
    const response = await axios.post(
      CHATGPT_API_URL,
      {
        message
      },
      {
        headers: {
          Authorization: OPENAI_SECRET_KEY
        }
      }
    );

    // Enviar la respuesta del ChatGPT API como respuesta a la solicitud original
    res.send(response.data);
  } catch (error) {
    // En caso de error, enviar un código de estado de error y el mensaje de error
    res.status(500).send(error.message);
  }
});

app.get("/v1/models", async (req, res) => {
  const response = await listModels();
  res.status(200).send(response);
});

app.post("/v1/completions", async (req, res) => {
  const { message } = req.body;
  const response = await createCompletion(message);
  console.log(response);
  res.status(200).send(response);
});

app.post("/v1/chat", async (req, res) => {
  const { message } = req.body;
  //const response = await sendMessageToChatGPT(message)
  //res.status(200).send(response);
  //const response = await example()
  console.log(response);
});

module.exports = {
  app
};
