const formatter = ({ id, title, artist, url, cover }) => ({
  type: "article",
  parse_mode: "markdown",
  id,
  title: `${title} - ${artist}`,
  message_text: `[${title} - ${artist}](${url})`,
  thumb_url: cover
});

module.exports = formatter;
