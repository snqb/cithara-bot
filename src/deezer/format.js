const formatter = require("../util/formatter");

const formatDeezerTrack = ({ id, title, link, album, artist: { name } }) =>
  formatter({
    id,
    title,
    artist: name,
    url: link,
    cover: album.cover_small
  });

module.exports = formatDeezerTrack;
