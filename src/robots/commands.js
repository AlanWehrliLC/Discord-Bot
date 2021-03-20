const config = require("../../config.json")

function robot(db, client){
  client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    const getCommandUsed = message.content
    db.collection(client.user.id).get().then((snapshot)=>{
                    snapshot.forEach(doc => {
                        const commands = doc.data()
                        const commandsArray = commands.commands
                        receivingAndProcessingData(commandsArray)
                    });
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
    if(!message.content === '!commands') return message.reply('Use o comando "!helpRemoveCommand", para saber como usar o comando "!removeCommand"')
    if (message.member.hasPermission('ADMINISTRATOR') && message.content === "!commands") {
      db.collection(client.user.id).get().then((snapshot)=>{
        snapshot.forEach(doc => {
            const commands = doc.data()
            const commandsArray = commands.commands
            receberDado(commandsArray)
          });
        })
        function receberDado(commandsArray){
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