//Tryplay.ddns.net
module.exports = {
  guildOnly: true,
  ownerOnly: true,
  callback: async({ message, args, client }) => {
    const Discord = require("discord.js");
    const request = require("request");
  
let pingURL = `https://api.minetools.eu/ping/Tryplay.ddns.net` //ip del servidor
  
  request(pingURL, function(err, resp, body){
    if(err) return console.log(err.message);
    body = JSON.parse(body);
    if(body.error) return message.channel.send(":x: `Error | Servidor fuera de linea o no disponible.`") 
    
    let DescReplace = /§\w/g;
    
    const EBReedSing = new Discord.MessageEmbed()
    .setColor('DEFAULT')
    .addField('__**Online **__', body.players.online+'/'+body.players.max, true)
    
//IMPORTANTE: el motd no se actualiza en tiempo real pero los players en linea sí.

    message.channel.send(EBReedSing); //mandamos el embed con la información.
  })
  }
}