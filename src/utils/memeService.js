//import tokenService from "./tokenService";

const INDEX_URL = "https://api.imgflip.com/get_memes";
//const CREATE_URL = "https://api.imgflip.com/caption_image";

async function getMemes() {
  let memes = await fetch(INDEX_URL);
  return memes;
}

export default {
  getMemes,
};
