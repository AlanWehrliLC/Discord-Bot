function robot(db, client, messageEmbed){
  client.on('guildMemberAdd', async (member) => {
      
      const imageURL = 'https://i.imgur.com/ugNDTI5.gif'

      const docRef = db.collection(client.user.id).doc(member.guild.id)
      docRef.get().then((doc)=>{
        const data = doc.data()
        const dataChannelID = data.channelIDDiscordWelcome
        const dataImageURL = data.imageURL
        const dataSetColor = data.setColorEmbed
        const dataSetTitle = data.setTitleEmbed
        const dataSetDescription = data.setDescriptionEmbed
        const channel = client.channels.cache.get(dataChannelID)
        if (dataChannelID === undefined) {
          return 
        }if (dataImageURL === undefined) {
          if (member.guild.id != member.guild) {
              return
          }if(dataChannelID != undefined){
              messageEmbed
              .setColor('#ef3027')
              .setAuthor(member.user.tag, member.user.displayAvatarURL())
              .setTitle(`Welcome!`)
              .setImage(imageURL)
              .setDescription(`${member.user}, welcome to the server ${member.guild.name}`)
              .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: 'png',size: 1024}))
              .setFooter(`User ID: ${member.user.id}`)
              .setTimestamp()
  
              channel.send(messageEmbed)
          }
        }
          if (member.guild.id != member.guild) {
              return
          }else if(dataImageURL != undefined && 
                    dataChannelID != undefined && 
                    dataSetColor != undefined &&
                    dataSetTitle != undefined &&
                    dataSetDescription != undefined){

          console.log(member.user.displayAvatarURL())
          messageEmbed
          .setColor(dataSetColor)
          .setAuthor(member.user.tag, member.user.displayAvatarURL())
          .setTitle(dataSetTitle)
          .setImage(dataImageURL)
          .setDescription(`${dataSetDescription}`)
          .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: 'png',size: 1024}))
          .setFooter(`User ID: ${member.user.id}`)
          .setTimestamp()

          channel.send(messageEmbed)
          }
      
  })
})
}

module.exports = robot