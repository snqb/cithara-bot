const { findTracks } = require("./api");
const format = require("./format");

async function getAppleMusicTracks(query, offset, limit) {
  const data = await findTracks(query, offset, limit);
  return data.map(format);
}

module.exports = getAppleMusicTracks;
