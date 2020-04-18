import tokenService from "./tokenService";

const INDEX_URL = "https://api.imgflip.com/get_memes";
const CREATE_URL = "https://api.imgflip.com/caption_image";

function getMemes() {
  return fetch(INDEX_URL).then((res) => res.json());
}

function handleCreateMeme(data) {
  return fetch(CREATE_URL, {
    method: "POST",
    body: `template_id=${data.template_id}&username=${data.username}&password=${data.password}&text0=${data.text0}&text1=${data.text1}`,
    headers: { "Content-type": "application/x-www-form-urlencoded" },
  }).then((res) => res.json());
}

export default {
  getMemes,
  handleCreateMeme,
};
