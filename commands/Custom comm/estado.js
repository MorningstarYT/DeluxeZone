module.exports = {
  category: 'Comandos',
  slash: 'both',
  cooldown: '5s',
  //testOnly: true,
  guildOnly: true,
  description: 'Te muestra el estado del servidor',
  aliases: ['ip', 'deluxe'],
  callback: async({ message, args, client }) => {
    const Discord = require("discord.js");
    const request = require("request");
  
let pingURL = `https://api.minetools.eu/ping/deluxezone.net` //ip del servidor
  if(message){
  request(pingURL, function(err, resp, body){
    if(err) return console.log(err.message);
    body = JSON.parse(body);
    if(body.error) return message.channel.send(":x: `Error | Servidor fuera de linea o no disponible.`") 
    
    let DescReplace = /§\w/g;
    
    const EBReedSing = new Discord.MessageEmbed()
    .setAuthor('DELUXE NETWORK', client.user.displayAvatarURL())
    .setColor('DEFAULT')
    .addField("__**IP:**__ deluxezone.net ","⠀⠀⠀⠀⠀⠀")
    .addField("__**Version:**__ 1.8 - 1.16.5","⠀⠀⠀⠀")
    .addField("__**Modalidades:**__","`SurvivalOP\nSemi Vanilla\nAnarquico`")
    .addField('__**Online **__', body.players.online+'/'+body.players.max, true)
    //Esto nos mostrara los players online en el embed
    //.setImage(motd) //esto pondra como imagen al motd.
    .setFooter("Unete a Deluxe NETWORK");
    
//IMPORTANTE: el motd no se actualiza en tiempo real pero los players en linea sí.

    message.channel.send(EBReedSing); //mandamos el embed con la información.
  })
  } else {
    request(pingURL, function(err, resp, body){
    if(err) return console.log(err.message);
    body = JSON.parse(body);
    if(body.error) return ":x: `Error | Servidor fuera de linea o no disponible.`" 
    
    let DescReplace = /§\w/g;
    
    const EBReedSing = new Discord.MessageEmbed()
    .setAuthor('DELUXE NETWORK', client.user.displayAvatarURL())
    .setColor('DEFAULT')
    .addField("__**IP:**__ mc.deluxezone.us ","⠀⠀⠀⠀⠀⠀")
    .addField("__**Version:**__ 1.8 - 1.16.5","⠀⠀⠀⠀")
    .addField("__**Modalidades:**__","`SurvivalOP\nSemi Vanilla\nAnarquico`")
    .addField('__**Online **__', body.players.online+'/'+body.players.max, true)
    //Esto nos mostrara los players online en el embed
    //.setImage(motd) //esto pondra como imagen al motd.
    .setFooter("Unete a Deluxe NETWORK");
    return EBReedSing
  })
  }
  }
}