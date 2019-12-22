require("dotenv").config();
const Telegraf = require("telegraf");

const wireUpCommands = require("./src/commands");
const webhookServer = require("./src/webhook-server");

const bot = new Telegraf(process.env.BOT_TOKEN);
wireUpCommands(bot);

if (process.env.NODE_ENV === "development") {
  bot.startPolling();
} else {
  const app = webhookServer(bot);
  app.listen();
}
