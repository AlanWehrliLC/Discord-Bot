function robot(client){
    client.on('message', (msg) => {
          const { content } = msg
          const cmds = {
            "!botDiscord": 'https://github.com/AlanWehrliLC/Phoenix-Heart-Discord-Bot',
            "!botTwitch": 'https://github.com/AlanWehrliLC/Phoenix-Heart-Twitch-Bot',
            "!github": "https://github.com/AlanWehrliLC",
            "!youtube": 'YOUTUBE: https://youtube.com/channel/UCnghGLwcxP0AuWdlqnUIKOg',
            "!instagram": "INSTAGRAM: @sralanw",
            "!commands": "!instagram, !youtube, !github, !botTwitch, !botDiscord",
          };
        
          cmds[content] && msg.reply(cmds[content]);
        });
  }
  
  module.exports = robot 