const express = require('express');
const { config } = require('dotenv');
const { Client } = require('discord.js');

config();
const { TOKEN_DISCORD } = process.env
const bot = new Client();
const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
  const { content } = msg
  const cmds = {
    "!botDiscord": 'https://github.com/AlanWehrliLC/Phoenix-Heart-Discord-Bot',
    "!botTwitch": 'https://github.com/AlanWehrliLC/Phoenix-Heart-Twitch-Bot',
    "!github": "https://github.com/AlanWehrliLC",
    "!youtube": 'YOUTUBE: https://youtube.com/channel/UCnghGLwcxP0AuWdlqnUIKOg',
    "!instagram": "INSTAGRAM: @sralanw",
    "!commands": "!instagram, !youtube, !github, !botTwitch, !botDiscord",
  };

  cmds[content] && msg.reply(cmds[content]);
});

bot.login(TOKEN_DISCORD)