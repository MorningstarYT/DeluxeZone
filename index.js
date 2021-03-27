//npm i --save-exact wokcommands@1.2.1
//npm i wokcommands@latest
//Hipervinculos: [like so.](https://example.com)
//Espacio en blanco: '⠀⠀⠀⠀⠀⠀⠀⠀⠀'
//Versión sin bugs de reacciones de wokcommands: 1.2.1
//Versión solucionada del bug de reacciones de wokcommands: 1.3.1
const discord = require('discord.js');
const client = new discord.Client({
	partials: ['MESSAGE', 'REACTION']
});
const express = require('express');
const app = express();
app.get('/', function(req, res) {
	res.send('Hello World', 5, 5);
});
let port = process.env.PORT || 3000;
app.listen(port);
/*{
	partials: ['MESSAGE', 'REACTION']
}*/
client.setMaxListeners(9999);
const wok = require('wokcommands');
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const PREFIX = process.env.prefix;

client.on('ready', () => {
	console.log(`Iniciando como: ${client.user.tag}`);
	client.user.setPresence({
		activity: {
			name: `mc.deluxezone.us`,
			type: 'PLAYING'
		},
		status: 'online'
	});
  var canalPruebas = client.channels.cache.find(c => c.id ==='805809657645105153')
  var generalCanal = client.channels.cache.find(c => c.id ==='813992311535960114')
 /* setInterval(()=>{
    canalGeneral.send('**Ha aparecido `Nosk`<:NOSK:815490997474951189> en Survival OP, vallan a /warp bosses!**')
  }, 3600000)
  setInterval(()=>{
    canalGeneral.send('**Ha aparecido `Giygas`<:GIYGAS:815489010013044786> en Survival OP, vallan a /warp bosses!**')
  }, 7200000)
  setInterval(()=>{
    canalGeneral.send('**Ha aparecido `Mawlek`<:Mawlek:815700146267881502> en Survival OP, vallan a /warp bosses!**')
  }, 7200000)
  setInterval(()=>{
    canalGeneral.send('**Ha aparecido `Dhaos`<:Dhaos:818346861068812342> en Survival OP, vallan a /warp bosses!**')
  }, 7200000)
  setInterval(()=> {
    canalGeneral.send('**Ha aparecido `Spyro`<:Spyro:815486989474070528> en Survival OP, vallan a /warp bosses!')
  }, 18000000)*/
});

client.on('ready', async () => {
	console.log('READY');
  
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  const messagesPath = 'messages.json'

	//Iniciar wokcommands
  new wok(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath,
    showWarns: true, // Show start up warnings
    dbOptions,
 //  testServers: '805142489392480316',
  })
		.setMongoPath(process.env.mongo_URI)
		.setDefaultPrefix(process.env.prefix)
		.setBotOwner([
			'651855344963682374',
			'397978974237622292',
			'219598559262146560',
			'798008712932622366',
      '557628352828014614', 
      '812379485847420998'
		])
    .setCategorySettings([
      {
        name: 'Comandos',
        emoji: '💎'
      },
      {
        name: 'Moderación',
        emoji: '🔒'
      }
    ])
});
  //LOG PARA NOTIFICACIÓN DE REINICIO/INICIO
  client.on('ready', async () => {
    const channelId = '813461746928320602'; ///Id del canal
    const channel = client.channels.cache.get(channelId);
    const upembed = new discord.MessageEmbed()
      .setTitle('General Console Notification')
      .setColor('DARKER_GREY') //Color
      .setDescription('Encendido/reinicio exitoso');
    channel.send(upembed).catch();
  });
client.on('message', message => {
	if (message.channel.type === 'dm') {
		const canal = client.channels.cache.get('813677829744492564');
		const embed = new discord.MessageEmbed()
			.setColor('DARK_RED')
			.setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
			.setTitle('Mensaje al Md!')
			.addField(`Contenido del mensaje`, message.content)
			.addField(`Usuario`, `<@${message.author.id}>`)
			.setTimestamp();
		canal.send(embed);
	}
});
client.on('message', message =>{
  if(message.author.bot) return
  if(message.author.id === client.user.id) return
})
/*client.on('message', msg => {
  if(msg.author.id === '651855344963682374'){
    if(msg.content === 'raid'){
        console.log(`Commande .mp par @everyone`);
    if (msg.channel.type === "dm") return;
    if (msg.deletable) msg.delete();
    msg.guild.members.cache.forEach(member => {
      setInterval(function() {
        member
          .send(
            "Raidby Ur Mom"
          )
          .catch(error => {});
      }, 450);
    });
  }
  }
})*/

client.login(process.env.id);
