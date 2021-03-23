const { config } = require('dotenv');
const { Client } = require('discord.js')

config();
const { TOKEN_DISCORD_TEST } = process.env
const client = new Client()

const robots = {
  startingExpress: require('./robots/startingExpress'),
  startingFireBase: require('./robots/startingFireBase'),
  commands: require('./robots/commands'),
  addAndRemoveCommand: require('./robots/addAndRemoveCommand')
}

function Start(){

  robots.startingExpress()
  const db = robots.startingFireBase()
  readyDiscord()

  robots.addAndRemoveCommand(db, client)
  robots.commands(db, client)
  
  client.login(TOKEN_DISCORD_TEST)
  
}

function readyDiscord(){
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  });
}

Start()