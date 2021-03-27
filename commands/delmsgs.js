module.exports = {
  category:'Moderación',
  guildOnly: true,
  aliases: 'clear',
  description: 'Borra cierta cantidad de mensajes',
  minArgs: 1,
  maxArgs: 3,
  ownerOnly: true, 
  expectedArgs  : '<Cantidad>',
  //requiredPermissions: ['MANAGE_MESSAGES'],
  callback: ({ message, args }) => {
    message.delete()
     message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`***Los mensajes han sido borrados***`)
      .then(message => {
        message.delete({ timeout: 1000 });
      });
    });
  }
}