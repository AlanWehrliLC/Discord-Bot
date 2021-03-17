const { config } = require('dotenv');
const express = require('express');

config();
const app = express();
function robot(){

  app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);

}

module.exports = robot