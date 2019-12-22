const getSpotifyTracks = require("./spotify");
const getDeezerTracks = require("./deezer");
const getAppleMusicTracks = require("./apple-music");
const trimPrefix = require("./util/trim-prefix");
const getPrefix = require("./util/get-prefix");
const { QUERY_LIMIT, QUERY_OFFSET_INCREMENTER } = require("./constants");

const musicServicePrefixStrategy = {
  s: getSpotifyTracks,
  a: getAppleMusicTracks,
  d: getDeezerTracks
};

const wireUpCommands = async bot => {
  bot.start(ctx => {
    ctx.reply(`Hi, I'll help you to send music.`);
  });

  bot.on("text", ctx => {
    ctx.reply("I'm alive");
  });

  bot.on("inline_query", async ({ inlineQuery, answerInlineQuery }) => {
    const offset = parseInt(inlineQuery.offset) || 0;
    const { query } = inlineQuery;

    if (query.length < 2) {
      return answerInlineQuery([]);
    }

    const prefix = getPrefix(query);
    const trackFetcher = musicServicePrefixStrategy[prefix];
    const trackQuery = trimPrefix(query);
    const tracks =
      trackQuery && trackQuery.length > 2
        ? await trackFetcher(trackQuery, offset, QUERY_LIMIT)
        : [];

    return answerInlineQuery(tracks, {
      next_offset: offset + QUERY_OFFSET_INCREMENTER
    });
  });
};

module.exports = wireUpCommands;
