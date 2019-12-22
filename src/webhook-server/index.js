const { NOW_URL, BOT_TOKEN } = process.env;

const webhookServer = bot => {
  const app = require("express")();

  const webhookUrl = `${NOW_URL}/bot${BOT_TOKEN}`;
  bot.telegram.setWebhook(webhookUrl);
  app.use(bot.webhookCallback(`/bot${BOT_TOKEN}`));
  app.get("/", (req, res) => {
    res.send("Telegram bot here");
  });

  return app;
};

module.exports = webhookServer;
