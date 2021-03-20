const config = require("../../config.json")
const firebase = require('firebase');

function robot(db, client){

    client.on('message', message => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não tem permissão!')

        const { content } = message
        const commandPromptDiscordChannel = {
            "!helpAddNew": `Adicione o nome do comando !github e separado por um espaço coloque o conteúdo "GITHUB: https://github.com/AlanWehrliLC" utilizando de aspas duplas! O comando ficará assim: !addNew !github "GITHUB:  https://github.com/AlanWehrliLC"`,
            "!helpRemoveCommand": `Adicione o nome do comando !github para remover da lista de comando. O comando ficará assim: !removeCommand !github`
        };
          
        commandPromptDiscordChannel[content] && message.reply(commandPromptDiscordChannel[content]);
        
      })

      client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if(message.content === '!addNew') return message.reply('Use o comando "!helpAddNew", para saber como usar o comando "!addNew"')
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!addNew/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!addNew ', '')
            if (textChannelValue.match(/!addNew/)) {
                function addCommands(commands){
                    db.collection(client.user.id)
                    .doc('commands')
                    .set({
                        commands
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Documento inserido com sucesso!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Comando adicionado com sucesso!')
                }
                addCommands(firebase.firestore.FieldValue.arrayUnion(textChannelValueReplace))
            }else{return message.reply('Use o comando "!helpAddNew", para saber como usar o comando "!addNew"')}
            
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
                        if (element.indexOf(commandToTeRemoved) != -1) {
                            removeCommand(element)
                        }
                    }
                }

                function removeCommand(dadoTratado){
                    db.collection(client.user.id)
                    .doc('commands')
                    .update({
                        commands: firebase.firestore.FieldValue.arrayRemove(dadoTratado)
                      },
                      )
                       .then(() => { console.log( `Documento removido com sucesso!` ) })
                       .catch(err => {console.log(err) })
                       message.reply(`O comando ${commandToTeRemoved} foi removido com sucesso!`)
                }
            }
            
          })
      
}

module.exports = robot