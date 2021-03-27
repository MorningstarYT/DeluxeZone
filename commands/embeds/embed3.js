module.exports = {
  category:'Comandos',
  description: 'Embed2',
  ownerOnly: true,
  guildOnly: true,
  aliases: ['edad'],
  
  callback: ({message, client}) => {
    
    const { MessageEmbed } = require('discord.js')

    const edad = new MessageEmbed()
    .setTitle("Edad")
    .setColor('#611BA2')
    .addField("🧒 Edad 10-13 \n🙋‍♂️ Edad 13-16 \n👨 Edad 16-18 \n🧔 Edad 18+ ","⠀⠀⠀⠀⠀⠀⠀")
    .addField("Genero","💁‍♀️ Mujer \n💁‍♂️ Hombre ")



    message.channel.send(edad)
  }
}