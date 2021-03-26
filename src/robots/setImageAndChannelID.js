const config = require("../../config.json")

function robot(db, client){
    client.on('message', message => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        const { content } = message
        const commandPromptDiscordChannel = {
          "!helpChannelIDConfig": `Adicione o ID do Canal que você queira que apareça as Boas Vindas. O comando ficará assim: !channelIDConfig 824722247469629449`,
          "!helpImageURLConfig": `Adicione o link de uma imagenm ou gif que você queira que apareça as Boas Vindas. O comando ficará assim: !imageURLConfig https://media.giphy.com/media/Skx9SKXCJphGcGnlv2/giphy.gif`
        };
          
        commandPromptDiscordChannel[content] && message.reply(commandPromptDiscordChannel[content]);
        
      })

    client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if(message.content === '!channelIDConfig') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!channelIDConfig/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!channelIDConfig ', '')
            if (textChannelValue.match(/!channelIDConfig/)) {
                function addCommands(channelID){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        channelID: channelID
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Documento inserido com sucesso!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Comando concluído com sucesso!')
                }
                addCommands(textChannelValueReplace)
            }
        }
    })

    client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if(message.content === '!imageURLConfig') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!imageURLConfig/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!imageURLConfig ', '')
            if (textChannelValue.match(/!imageURLConfig/)) {
                function addCommands(imageURL){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        imageURL: imageURL
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Documento inserido com sucesso!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Comando concluído com sucesso!')
                }
                addCommands(textChannelValueReplace)
            }
        }
    })
}

module.exports = robot