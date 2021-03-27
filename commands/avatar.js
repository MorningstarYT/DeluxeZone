module.exports = {
  category: 'Comandos',
  guildOnly: true,
  description: `Te brinda tu avatar o el del usuario mencionado`,
  maxArgs: 1,
  expectedArgs: '<@Usuario>(Opcional)',
  callback: ({ message, args }) =>{
    const {MessageEmbed} = require('discord.js')
    let user = message.mentions.users.first();
    if (!user) {
      const embed1 = new MessageEmbed()
      .addField(message.author.tag, '⠀⠀⠀⠀⠀⠀⠀⠀⠀')
      .setImage(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
      message.channel.send(embed1)
      console.log(`ID de ${message.author.tag}: ${message.author.id}`)
    } else {
      const embed2 = new MessageEmbed()
      .addField(user.tag, '⠀⠀⠀⠀⠀⠀⠀⠀⠀')
      .setImage(user.displayAvatarURL({ dynamic: true, size: 256 }))
      message.channel.send(embed2)
      console.log(`ID de ${user.tag}: ${user.id}`)
    }
  }
}