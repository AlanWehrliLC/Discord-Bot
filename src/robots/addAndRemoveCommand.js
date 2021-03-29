const config = require("../../config.json")
const firebase = require('firebase');

function robot(db, client){

      client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if(message.content === '!newCommand') return message.reply('Use o comando "!helpNewCommand", para saber como usar o comando "!newCommand"')
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!newCommand/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!newCommand ', '')
            if (textChannelValue.match(/!newCommand/)) {
                function addCommands(commands){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        commands
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
                }
                addCommands(firebase.firestore.FieldValue.arrayUnion(textChannelValueReplace))
            }
            
        }
        
      })

        client.on('message', (message) => {
            if (message.author.bot) return;
            if (message.channel.type == 'dm') return;
            if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
            if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
            if(message.content === '!removeCommand') return message.reply('Use o comando "!helpRemoveCommand", para saber como usar o comando "!removeCommand"')
            const commandToTeRemoved = message.content.replace('!removeCommand ', '')
            if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!removeCommand/)) {

                const docRef = db.collection(client.user.id).doc(message.guild.id)
                docRef.get().then((doc)=>{
                        const commands = doc.data()
                        const commandsArray = commands.commands
                        receivingAndProcessingData(commandsArray)
                })

                function receivingAndProcessingData(arrayDataCommands){
                    for (let index = 0; index < arrayDataCommands.length; index++) {
                        const element = arrayDataCommands[index];
                        if (element.indexOf(commandToTeRemoved) != -1) {
                            removeCommand(element)
                        }
                    }
                }

                function removeCommand(dadoTratado){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .update({
                        commands: firebase.firestore.FieldValue.arrayRemove(dadoTratado)
                      },
                      )
                       .then(() => { console.log( `Document removed successfully!` ) })
                       .catch(err => {console.log(err) })
                       message.reply(`The command ${commandToTeRemoved} has been removed successfully!`)
                }
            }
            
          })
      
}

module.exports = robot