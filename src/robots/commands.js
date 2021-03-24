const config = require("../../config.json")

function robot(db, client){
  client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    const getCommandUsed = message.content
    const docRef = db.collection(client.user.id).doc(message.guild.id)
    docRef.get().then((doc)=>{
      const commands = doc.data()
      const commandsArray = commands.commands
      receivingAndProcessingData(commandsArray)
    })

                function receivingAndProcessingData(arrayDataCommands){
                    for (let index = 0; index < arrayDataCommands.length; index++) {
                        const element = arrayDataCommands[index];
                        
                        if (element.indexOf(getCommandUsed) != -1) {
                          const valueForTheDiscordChannel = element.replace(`${getCommandUsed}`, '').replace(/"/g, '')
                          message.reply(valueForTheDiscordChannel)
                        }

                    }
                    
                }
  })

  client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    if (message.content === "!commands") {
      const docRef = db.collection(client.user.id).doc(message.guild.id)
      docRef.get().then((doc)=>{
        const commands = doc.data()
        if (commands === undefined) {
          return message.reply('There are no commands to be executed!')
        }
        const commandsArray = commands.commands
        receiveData(commandsArray)
      })
        function receiveData(commandsArray){
          const newArray = []
          for (let index = 0; index < commandsArray.length; index++) {
          const element = commandsArray[index];
          const elementReplace = element.replace(' ', '                                                  ')
          const elementSubstring = elementReplace.substring(0, 50)
          const elementTrim = elementSubstring.trim()
          const elementTrimReplace = elementTrim
          newArray.push(elementTrimReplace)
        }
          showAllCommands(newArray)
        }
        function showAllCommands(processedData){
          const processedDataToString = processedData.toString().replace(/,/g, ', ')
          message.reply(processedDataToString)
        }
      }
    })
}

module.exports = robot