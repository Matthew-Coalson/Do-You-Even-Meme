//import tokenService from "./tokenService";

const INDEX_URL = "https://api.imgflip.com/get_memes";
//const CREATE_URL = "https://api.imgflip.com/caption_image";

function getMemes() {
  return fetch(INDEX_URL).then((res) => res.json());
}

export default {
  getMemes,
};
