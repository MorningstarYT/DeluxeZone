module.exports = {
  category:'Comandos',
  description: 'Embed1',
  ownerOnly: true,
  guildOnly: true,
  aliases: ['roles'],
  
  callback: ({message, client}) => {
    
    const { MessageEmbed } = require('discord.js')

    const roles = new MessageEmbed()
    .setTitle("Paises")
    .setColor('#611BA2')
    .addField("Elige el pais al cual pertenezcas"," 🇲🇽 - Mexico \n 🇦🇷 - Argentina \n 🇨🇴 - Colombia \n 🇪🇸 - España \n 🇨🇱 - Chile \n 🇻🇪 - Venezuela \n 🇪🇨 - Ecuador \n 🇺🇾 - Uruguay \n 🇵🇪 - Peru ")

    message.channel.send(roles)
  }
}