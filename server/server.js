const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { listModels, createCompletion, createImage } = require("../OpenAi/openai");

app.use(
  cors({
    origin: "*"
  })
);
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.get("/v1/models", async (req, res) => {
  const response = await listModels();
  res.status(200).send(response);
});

// TextCompletion
app.post("/v1/completions", async (req, res) => {
  const { message, apiKey } = req.body;
  const response = await createCompletion(message, apiKey);
  console.log(response);
  res.status(200).send(response);
});

// Images
app.post("/v1/createImage", async (req, res) => {
  const { message } = req.body;
  console.log("🚀 ~ file: server.js:65 ~ app.post ~ message", message)
  const response = await createImage(message);
  console.log(response);
  res.status(200).send(response);
});

module.exports = {
  app
};
