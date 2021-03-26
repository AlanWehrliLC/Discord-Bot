const { config } = require('dotenv');
const { Client, MessageEmbed } = require('discord.js')

config();
const { TOKEN_DISCORD } = process.env
const client = new Client()
const messageEmbed = new MessageEmbed()

const robots = {
  startingExpress: require('./robots/startingExpress'),
  startingFireBase: require('./robots/startingFireBase'),
  commands: require('./robots/commands'),
  addAndRemoveCommand: require('./robots/addAndRemoveCommand'),
  welcomeToTheServer: require('./robots/welcomeToTheServer'),
  setImageAndChannelID: require('./robots/setImageAndChannelID')
}

function Start(){

  robots.startingExpress()
  const db = robots.startingFireBase()
  readyDiscord()

  robots.welcomeToTheServer(db, client, messageEmbed)
  robots.setImageAndChannelID(db, client)
  robots.addAndRemoveCommand(db, client)
  robots.commands(db, client)
  
  client.login(TOKEN_DISCORD)
  
}

function readyDiscord(){
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  });
}

Start()