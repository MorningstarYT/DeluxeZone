module.exports = {
  category:'Moderación',
  description: 'Desbloquea un canal',
  guildOnly: true,
    minArgs: 0,
  maxArgs: 1,
  ownerOnly: true,
  expectedArgs: '<Channel Tag> (Opcional)',
// requiredPermissions: ['MANAGE_CHANNELS'],
  callback: async({message, args, client}) => {
    const {guild} = message
    const Discord = require('discord.js')
    const canal = message.mentions.channels.first() || message.channel
    const miembroPruebas = '783521971111198740'
    const miembroDz = '805155984280387594'
    if(canal.id === ['805163887388655616', '805809657645105153']) return; 
    canal.overwritePermissions([
      {
        id: miembroDz, 
        allow: 'SEND_MESSAGES'
      }
    ])
  const embed = new Discord.MessageEmbed()
   .setTitle("Actualización del canal!")
   .setDescription(`${canal} ha sido desbloqueado`)
   .setColor("ORANGE");
   await message.channel.send(embed);
   message.delete();
  }
}