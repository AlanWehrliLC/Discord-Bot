# Todos os comandos estão aqui!

<p align="center">
  <a href="#comandos-do-administrador">Comandos do administrador</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#comandos-publicos">Comandos publicos</a>
</p>

## Comandos do administrador

- <a href="#new-command">!newCommand</a></br>
- <a href="#remove-command">!removeCommand</a>
- <a href="#channel-id-config-discord-welcome">!channelIDConfigDiscordWelcome</a>
- <a href="#image-url-config">!imageURLConfig</a>
- <a href="#set-color-config">!setColorConfig</a>
- <a href="#set-title-config">!setTitleConfig</a>
- <a href="#set-description-config">!setDescriptionConfig</a>
- <a href="#channel-id-config-discord-twitch-status">!channelIDConfigDiscordTwitchStatus</a>
- <a href="#user-name-twitch-config">!userNameTwitchConfig</a>
- <a href="#live-message-twitch-config">!liveMessageTwitchConfig</a>
- <a href="#start-twitch-notifications">!startTwitchNotifications</a>

### New command

#### !newCommand

> > Serve para adicionar comandos personalizados no Discord, como por exemplo: `!twitchAlanWehrliLC`, que retorna no chat `Twitch:  https://www.twitch.tv/alanwehrlilc`

> Para adicionar um novo comando escreva no chat do Discord da seguinte maneira: `!newCommand !twitchAlanWehrliLC "Twitch:  https://www.twitch.tv/alanwehrlilc"`.
Coloque o conteudo do comando entre aspas duplas, por questão de padrão.

<p align="center">
  <img alt="New Command" src="./assets/newCommand.gif" width="100%">
</p>

### Remove command

#### !removeCommand

> > Serve para remover um comando personalizado do Cloud Firestore, como por exemplo: `!twitchAlanWehrliLC`...

> Para remover um comando escreva no chat do Discord da seguinte maneira: `!removeCommand !twitchAlanWehrliLC`.

<p align="center">
  <img alt="New Command" src="./assets/removeCommand.gif" width="100%">
</p>

## Configurações para a mensagem de boas-vindas!

> Inicialmente é necessário adicionar em qual chat sera as boas-vindas.

### Channel ID Config Discord Welcome

> > Serve para adicionar onde sera a mensagem de boas-vindas.

> É necessário adicionar o ID do chat, para pegar o ID, utilize a barra invertida e mencionado o chat: ` \#sj `

<p align="center">
  <img alt="get channel ID Discord Welcome" src="./assets/getChannelIDConfigDiscordWelcome.gif" width="100%">
</p>

> > > Para adicionar o ID do chat, escreva no chat do Discord da seguinte maneira: `!channelIDConfigDiscordWelcome 830904950740615219`

<p align="center">
  <img alt="channel ID Discord Welcome" src="./assets/ChannelIDConfigDiscordWelcome.gif" width="100%">
</p>

### Image URL Config

> > Serve para adicionar uma imagem ou gif na mensagem de boas-vindas.

> Para adicionar um link, escreva no chat do Discord da seguinte maneira: `!imageURLConfig https://i.imgur.com/ugNDTI5.gif`

<p align="center">
  <img alt="image URL Config" src="./assets/imageURLConfig.gif" width="100%">
</p>

### Set Color Config

> > Serve para adicionar uma cor na mensagem de boas-vindas.

> Para adicionar a cor, escreva no chat do Discord da seguinte maneira: `!setColorConfig #ef3027`. A cor deve ser no formato de hexadecimal.

<p align="center">
  <img alt="set Color Config" src="./assets/setColorConfig.gif" width="100%">
</p>

### Set Title Config

> > Serve para adicionar um título na mensagem de boas-vindas.

> Para adicionar um título, escreva no chat do Discord da seguinte maneira: `!setTitleConfig Boas-Vindas`

<p align="center">
  <img alt="set Title Config" src="./assets/setTitleConfig.gif" width="100%">
</p>

### Set Description Config

> > Serve para adicionar um descrição na mensagem de boas-vindas.

> Para adicionar uma descrição, escreva no chat do Discord da seguinte maneira: `!setDescriptionConfig Seja Boas-Vindas ao servidor!`

<p align="center">
  <img alt="set Title Config" src="./assets/setDescriptionConfig.gif" width="100%">
</p>

## Configurações para as notificações de lives da twitch 

> Inicialmente é necessário adicionar em qual chat sera as notificações de lives da twitch.

### Channel ID Config Discord Twitch Status

> > Serve para adicionar onde sera as notificações de lives da twitch.

> É necessário adicionar o ID do chat, para pegar o ID, utilize a barra invertida e mencionado o chat: ` \#gr `

<p align="center">
  <img alt="get channel ID Config Discord Twitch Status" src="./assets/getChannelIDConfigDiscordTwitchStatus.gif" width="100%">
</p>

> > > Para adicionar o ID do chat, escreva no chat do Discord da seguinte maneira: `!channelIDConfigDiscordTwitchStatus 830904950740615219`

<p align="center">
  <img alt="channel ID Config Discord Twitch Status" src="./assets/channelIDConfigDiscordTwitchStatus.gif" width="100%">
</p>

### User Name Twitch Config

> > Serve para adicionar qual canal da twitch, sera a notificação.

> É necessário pegar o nome do canal da twitch `AlanWehrliLC`

> > > Para adicionar o nome do canal da twitch, escreva no chat do Discord da seguinte maneira: `!userNameTwitchConfig AlanWehrliLC`

<p align="center">
  <img alt="user Name TwitchConfig" src="./assets/userNameTwitchConfig.gif" width="100%">
</p>

### Live Message Twitch Config

> > Serve para adicionar um descrição na mensagem da notificação.

> Para adicionar uma descrição, escreva no chat do Discord da seguinte maneira: `!liveMessageTwitchConfig A live já começo!`

<p align="center">
  <img alt="live Message Twitch Config" src="./assets/liveMessageTwitchConfig.gif" width="100%">
</p>

## Depois que tudo estiver configurado é hora de iniciar as notificações

## Start Twitch Notifications

> > Serve para adicionar um descrição na mensagem da notificação.

> Para adicionar uma descrição, escreva no chat do Discord da seguinte maneira: `!startTwitchNotifications`

> > "Esse comando não mostra que esta funcionado!"

<p align="center">
  <img alt="start Twitch Notifications" src="./assets/startTwitchNotifications.gif" width="100%">
</p>

<p align="center">
  <img alt="Twitch Notifications" src="./assets/TwitchNotifications.gif" width="100%">
</p>

## Comandos publicos

- <a href="#commands">!commands</a>
- <a href="#usando-os-comandos-adicionados">Usando os comandos adicionados</a>


### !commands

> > Para saber quais comandos foram adicionados, basta colocar o comando `!commands`

<p align="center">
  <img alt="commands" src="./assets/commands.gif" width="100%">
</p>

#### Usando os comandos adicionados

> > Para usar o comando adicionado, basta colocar o comando `!twitchAlanWehrliLC`

<p align="center">
  <img alt="twitch AlanWehrliLC" src="./assets/twitchAlanWehrliLC.gif" width="100%">
</p>