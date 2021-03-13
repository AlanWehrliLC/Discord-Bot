const { config } = require('dotenv');
const { Client } = require('discord.js');

config();
const { TOKEN_DISCORD } = process.env
const bot = new Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.login(TOKEN_DISCORD)