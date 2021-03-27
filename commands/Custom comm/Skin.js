const Discord= require('discord.js')
module.exports = {
  category: 'Comandos',
  guildOnly: true,
  cooldown: '2s',
  description: 'Busca la skin de un usuario premium (Sino eres premium se te pondrá la skin del usuario premium llamado `Skin`)',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<Usuario de Minecraft>',
  callback: ({message, args}) =>{
    let skin = args.join(' ') //Nombre de la skin

    if (!args[0]) { //Si no proporciona el nombre de la skin
        return message.channel.send("Dime el nombre de una skin") //Esto enviara un mensaje si no se envió el nombre de la skin
    }

    let url = `https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${skin}/700`;  //Esto sera la imagen de la skin

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("`Skin nick:` "+skin+"")
    .setImage(url)

message.channel.send(embed)
   }
}