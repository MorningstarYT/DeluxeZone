module.exports = {
  category: 'Comandos',
  description: 'Explicacion sobre reportes',
  guildOnly: true,
 cooldown: '15s',
  ownerOnly: true,
  aliases: ['report'],
  callback: ({ message, args, client }) =>{
    const {MessageEmbed} = require('discord.js')
    const user = message.author
    const channel = message.channel

      const reportes = new MessageEmbed()
      .setTitle('¿Como crear un reporte?')
      .setThumbnail(client.user.displayAvatarURL())
      .addField("a", 'a')
      .setFooter('a')
       channel.send(reportes)
  } 
}