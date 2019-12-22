const { findTracks } = require("./api");
const format = require("./format");

async function getSpotifyTracks(query = "", offset, limit) {
  const tracks = await findTracks(query, offset, limit);
  return tracks.map(format);
}

module.exports = getSpotifyTracks;
