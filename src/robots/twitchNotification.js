const configPrefix = require("../../config.json")
const { config } = require('dotenv');
const https = require('https');

config();
const { CLIENT_ID_TWITCH_APPLICATION } = process.env

function robot(db, client){
    client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.toLowerCase().startsWith(configPrefix.prefix.toLowerCase())) return;
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
        if (message.content === "!startTwitchNotifications")
        if (message.member.hasPermission('ADMINISTRATOR') && message.content.match(/!startTwitchNotifications/)) {
        
        const docRef = db.collection(client.user.id).doc(message.guild.id)
        docRef.get().then((doc)=>{
          const data = doc.data()
          const dataUserNameTwitch = data.userNameTwitch
          const dataChannelIDTwitch = data.channelIDDiscordTwitchStatus
          const dataliveMessageTwitch = data.liveMessageTwitch
          
          const channel = client.channels.cache.get(dataChannelIDTwitch)
          
          if (dataUserNameTwitch === undefined || dataChannelIDTwitch === undefined) {
            return 
          }
          if (message.guild.id != message.guild) {
              return
            }if(dataUserNameTwitch != undefined && dataChannelIDTwitch != undefined){
                twitchLiveCheckStream(dataUserNameTwitch)
            }
            function twitchLiveCheckStream(dataUserNameTwitch){
                let optionsGetID = {
                  hostname: 'api.twitch.tv',
                  family: 4,
                  path: `/kraken/users?login=${dataUserNameTwitch}`,
                  headers: {
                    'Accept': 'application/vnd.twitchtv.v5+json',
                    'Client-ID': CLIENT_ID_TWITCH_APPLICATION 
                  }
                }
              
                https.get(optionsGetID, (res)=>{
                  let data = ''
                  res.on('data', (chunk)=>{
                    data += chunk
                    res.on('end', ()=>{
                        const parsedData = data
                        const parsedJson = JSON.parse(parsedData)
                        const getID = parsedJson.users[0]._id
                        optionsStatusStream(getID)
                    })
                  });
                }); 
              
                function optionsStatusStream(pushID){
                  let optionsStatusStream = {
                    hostname: 'api.twitch.tv',
                  family: 4,
                    path: `/kraken/streams/${pushID}`,
                    headers: {
                      'Accept': 'application/vnd.twitchtv.v5+json',
                      'Client-ID': CLIENT_ID_TWITCH_APPLICATION 
                    }
                  }
                
                  https.get(optionsStatusStream, (res)=>{
                    let data = ''
                    res.on('data', (chunk)=>{
                      data += chunk
                      res.on('end', ()=>{
                          const parsedData = data
                          const parsedJson = JSON.parse(parsedData)
                          const statusStream = parsedJson.stream
                            deliveringANotification(statusStream)  
                      })
                    });
                  }); 
                  
                  function deliveringANotification(notificationStatus){
                    if (notificationStatus != null) {
                      channel.send(`${dataliveMessageTwitch}\nhttps://www.twitch.tv/${dataUserNameTwitch}`)
                    }
                  }
    
                }
                
              }
        })  
        }
      })
}

module.exports = robot