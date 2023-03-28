const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const sizes = [`256x256`, `512x512`, `1024x1024`];

async function createImage(prompt, n, size) {
  const response = await openai.createImage({
    prompt,
    n,
    size,
  });

  console.log(response.data);

  return response.data;
}

createImage(`A woman, painting herself in a mirror.`, 1, sizes[2]);
