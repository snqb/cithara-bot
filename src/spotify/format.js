const formatter = require("../util/formatter");

const formatSpotifyTrack = ({ id, name, artists, external_urls, album }) =>
  formatter({
    id,
    title: name,
    artist: artists[0].name,
    url: external_urls.spotify,
    cover: album.images[0].url
  });

module.exports = formatSpotifyTrack;
