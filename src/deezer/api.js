const axios = require("axios");
const { DEEZER_BASE } = require("../constants");

const findTracks = async (query, offset, limit) => {
  const url = encodeURI(
    `${DEEZER_BASE}/search?q=${query}&order=RATING_DESC&limit=${limit}&index=${offset}`
  );
  const result = await axios.get(url);
  return result.data.data || [];
};

module.exports = {
  findTracks
};
