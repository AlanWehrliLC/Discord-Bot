const config = require("../../config.json")

function robot(db, client){
    client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if(message.content === '!liveMessageTwitchConfig') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!liveMessageTwitchConfig/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!liveMessageTwitchConfig ', '')
            if (textChannelValue.match(/!liveMessageTwitchConfig/)) {
                function addCommands(liveMessageTwitchConfig){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        liveMessageTwitch: liveMessageTwitchConfig
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
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
        if(message.content === '!userNameTwitchConfig') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!userNameTwitchConfig/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!userNameTwitchConfig ', '')
            if (textChannelValue.match(/!userNameTwitchConfig/)) {
                function addCommands(userNameTwitchConfig){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        userNameTwitch: userNameTwitchConfig
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
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
        if(message.content === '!channelIDConfigDiscordTwitchStatus') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!channelIDConfigDiscordTwitchStatus/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!channelIDConfigDiscordTwitchStatus ', '')
            if (textChannelValue.match(/!channelIDConfigDiscordTwitchStatus/)) {
                function addCommands(channelIDConfigDiscordTwitchStatus){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        channelIDDiscordTwitchStatus: channelIDConfigDiscordTwitchStatus
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
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
        if(message.content === '!channelIDConfigDiscordWelcome') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!channelIDConfigDiscordWelcome/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!channelIDConfigDiscordWelcome ', '')
            if (textChannelValue.match(/!channelIDConfigDiscordWelcome/)) {
                function addCommands(channelIDConfigDiscordWelcome){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        channelIDDiscordWelcome: channelIDConfigDiscordWelcome
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
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
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
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
        if(message.content === '!setColorConfig') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!setColorConfig/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!setColorConfig ', '')
            if (textChannelValue.match(/!setColorConfig/)) {
                function addCommands(setColorConfig){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        setColorEmbed: setColorConfig
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
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
        if(message.content === '!setTitleConfig') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!setTitleConfig/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!setTitleConfig ', '')
            if (textChannelValue.match(/!setTitleConfig/)) {
                function addCommands(setTitleConfig){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        setTitleEmbed: setTitleConfig
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
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
        if(message.content === '!setDescriptionConfig') return 
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!setDescriptionConfig/)) {
            const textChannelValue = message.content
            const textChannelValueReplace = textChannelValue.replace('!setDescriptionConfig ', '')
            if (textChannelValue.match(/!setDescriptionConfig/)) {
                function addCommands(setDescriptionConfig){
                    db.collection(client.user.id)
                    .doc(message.guild.id)
                    .set({
                        setDescriptionEmbed: setDescriptionConfig
                      }, {merge: true}
                      )
                       .then(() => { console.log( `Document inserted successfully!` ) })
                       .catch(err => {console.log(err) })
    
                       message.reply('Command added successfully!')
                }
                addCommands(textChannelValueReplace)
            }
        }
    })
}

module.exports = robot