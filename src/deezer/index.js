const { findTracks } = require("./api");
const format = require("./format");

async function getDeezerTracks(query, offset, limit) {
  const data = await findTracks(query, offset, limit);
  return data.map(format);
}

module.exports = getDeezerTracks;
