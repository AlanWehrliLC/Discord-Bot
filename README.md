# Discord Bot
 ***Discord bot com nodejs e integração com Cloud Firestore.***

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e APIs:

- node.js
- discord.js
- dotenv
- express
- firebase
- https
- twitch api

<p align="center">
  <a href="#instalação-de-dependencias">Instalação de dependencias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuração-do-ambiente-local">Configuração do ambiente local</a>
</p>

## Instalação de dependencias

> Cria em algum lugar do seu pc, uma pasta para criarmos uma copia do repositório, dentro dela abra o **cmd** ou **powershell** e digite os comandos abaixo:

```
git clone https://github.com/AlanWehrliLC/Discord-Bot.git
cd Discord-Bot
npm install
```

## Configuração do ambiente local

> Para configurar o ambiente de desenvolvimento, você precisa criar um arquivo `.env` na raiz do projeto, e adicionar os seguintes parametros nele:
```
"Discord Token"
TOKEN_DISCORD=ODI3MTc4MTY1ODE0MDM0NDUy.YGXPsg.B0jXsYqvDrrDyEM3-M3AoOVDlg4

"Firebase, Web App"
API_KEY=AIzaSyCozaY1NrykIPviRU-p4tUse78UYwoDdP4
AUTH_DOMAIN=new-test-bot-36d16.firebaseapp.com
PROJECT_ID=new-test-bot-36d16
STORAGE_BUCKET=new-test-bot-36d16.appspot.com
MESSAGING_SENDER_ID=183164803302
APP_ID=1:183164803302:web:aa63fbca0e7ffac54f0327
MEASUREMENT_ID=G-T2WRKGBES4

"Aplicativo Twitch"
CLIENT_ID_TWITCH_APPLICATION=29fbug62p4u54a5e2349p1ou7fv2di

"Essas variaveis de ambiente são meramente ilustrativas..."
```
A seguir mostrarei como e onde pegar essas variaveis de ambiente:

<p align="center">
  <a href="#token-discord">TOKEN DISCORD</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#firebase-web-app">Firebase, Web App</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cloud-firestore-firestore-database">Cloud Firestore, Firestore Database</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#aplicativo-twitch">Aplicativo Twitch</a>
</p>

### TOKEN DISCORD
> Entre no site de desenvolvedor do [Discord Developers](https://discord.com/developers) e crie um novo aplicativo, em **BOT** copie o *TOKEN*:

<p align="center">
  <img alt="TOKEN_DISCORD" src="./assets/TOKEN_DISCORD.gif" width="100%">
</p>

### Firebase, Web App
> Entre no site do [Firebase](https://console.firebase.google.com), crie um projeto, e adicione um aplicativo web:

<p align="center">
  <img alt="Firebase, Web App" src="./assets/FirebaseWebApp.gif" width="100%">
</p>

### Cloud Firestore, Firestore Database

> Não se esqueça de criar um banco de dados:

<p align="center">
  <img alt="banco de dados" src="./assets/database.gif" width="100%">
</p>

### Aplicativo Twitch

> Entre no site da [Twitch Devs](https://dev.twitch.tv/), em **Console**,
 crie um aplicativo:

<p align="center">
  <img alt="banco de dados" src="./assets/appTwitch.gif" width="100%">
</p>

## Uso local

> Depois de ter definido as variaveis de ambiente, abra o **cmd** ou **powershell** e digite o comando abaixo:
</br>
"Ou no próprio VS Code abra um novo terminal"

```
npm run start
```

<p align="center">
  <img alt="npm run start" src="./assets/npmRunStart.gif" width="100%">
</p>

## Colocando o bot no seu servidor do Discord

> Para colocar o bot seu Discord, é necessário pegar o ID do bot, criado junto com o aplicativo do Discord e unir com o link abaixo:
</br>
Coloque o ID no lugar do `<IDDISCORD>`
</br>
`https://discord.com/api/oauth2/authorize?client_id=<IDDISCORD>&scope=bot&permissions=1`
</br>
Nessa URL contem as permições necessárias, que você pode dar ao Bot, que fica no fim da URL "permissions=", o número após ele, são as permições (Exemplo: Administrador = 8, etc). Veja como adquirir o <a href="#id-do-bot">ID do Bot</a>  e as <a href="#permições">permições</a> abaixo:

### ID do Bot

<p align="center">
  <img alt="npm run start" src="./assets/idDoBot.gif" width="100%">
</p>

### Permições

<p align="center">
  <img alt="npm run start" src="./assets/permições.gif" width="100%">
</p>
A URL ficara assim:

```
https://discord.com/api/oauth2/authorize?client_id=827178165814034452&scope=bot&permissions=8
```

> [Saiba mais ](https://discord.com/developers/docs/topics/oauth2#bots)

## Documentaçoes

- [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Express](https://expressjs.com/pt-br/)
- [Cloud Firestore](https://firebase.google.com/docs/firestore?authuser=0)
- [Twitch](https://dev.twitch.tv/docs/v5/reference/users#get-user-by-id)
- [Discord](https://discord.com/developers/docs/intro)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [https](https://nodejs.org/api/https.html)
- [Firebase](https://firebase.google.com/docs/)

# Colocando em Cloud

> Para colocar em produção existe varios serviços de cloud, como [glitch](https://glitch.com/), [replit](https://replit.com/), [discloudbot](https://discloudbot.com/), entre outros...

> Eu estou utilizando o Google Cloud, mais especificamente o serviço [Cloud Run](https://cloud.google.com/run?hl=pt-br)...

# Monitoramento

> Para o Bot funcionar 24 horas por dia, é necessário uma monitoração contínua, como [uptimerobot](https://uptimerobot.com/)...

> Eu utilizo outro serviço da Google Cloud, que se chama, [Monitoring](https://cloud.google.com/monitoring), mais especificamente na parte de "Verificações de tempo de atividade".
