const formatter = require("../util/formatter");

const formatAppleMusicTrack = ({
  trackId,
  trackName,
  trackViewUrl,
  artworkUrl30,
  artistName
}) =>
  formatter({
    id: trackId,
    title: trackName,
    artist: artistName,
    url: trackViewUrl,
    cover: artworkUrl30
  });

module.exports = formatAppleMusicTrack;
