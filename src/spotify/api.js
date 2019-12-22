const SpotifyWebApi = require("spotify-web-api-node");

const client = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "https://www.example.com/callback"
});

const auth = async () => {
  const token = await client.clientCredentialsGrant();
  client.setAccessToken(token.body.access_token);
};

const findTracks = async (query, offset, limit) => {
  await auth();
  const result = await client.searchTracks(query, {
    limit,
    offset
  });

  const tracks = result.body.tracks.items || [];
  return tracks || [];
};

module.exports = {
  findTracks
};
