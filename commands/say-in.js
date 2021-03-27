module.exports = {
  category:'Moderación',
  description: 'Escribe algo en otro canal',
  guildOnly: true,
  ownerOnly: true,
  minArgs: 0,
  maxArgs: -1,
  expectedArgs  : '<Canal> <Mensaje>',
  ownerOnly: true,
  //requiredPermissions: ['MANAGE_MESSAGES'],
  callback: ({message, args}) => {
    message.delete()
          const channel = message.mentions.channels.first() 
let sendch = message.guild.channels.cache.find(channel => channel.name === `${channel}`) 
let as = args.slice(1).join(' ');

  if (!channel) return message.channel.send(`En que canal voy a enviar el mensaje?`) 
if (!as) return message.channel.send(`Que voy a decir?`); 
  channel.stopTyping()
channel.send(as)

  }
}