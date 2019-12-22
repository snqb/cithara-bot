const axios = require("axios");
const { APPLE_MUSIC_BASE } = require("../constants");

const prepareQuery = query => query.split(" ").join("+");

const findTracks = async (query, offset, limit) => {
  const url = `${APPLE_MUSIC_BASE}/search?media=music&term=${prepareQuery(
    query
  )}&limit=${limit}&offset=${offset}`;
  const result = await axios.get(encodeURI(url));
  return result.data.results || [];
};

module.exports = {
  findTracks
};
