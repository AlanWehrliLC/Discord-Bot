const { config } = require('dotenv');
const { Client } = require('discord.js')

config();
const { TOKEN_DISCORD } = process.env
const client = new Client()

const robots = {
  startingExpress: require('./robots/startingExpress'),
  commands: require('./robots/commands')
}

function Start(){

  robots.startingExpress()
  readyDiscord()

  robots.commands(client)

  client.login(TOKEN_DISCORD)
  
}

function readyDiscord(){
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  });
}

Start()