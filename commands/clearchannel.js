module.exports = {
  category: 'Moderación',
  guildOnly: true,
  description: 'Borra una cantidad indefinida de mensajes',
  commands: ['clearchannel', 'clear', 'cls', 'purge'],
  cooldown: '30s',
  ownerOnly: true, 
//  requiredPermissions: ['MANAGE_MESSAGES'],
  permissionsError: `No tienes los permisos necesarios para borrar mensajes`,
  callback: ({ message, client }) => {
    message.reply('esta seguro que quiere borrar 50 mensajes de una?')
     message.react('👍').then(() => message.react('👎'));

    const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('Los mensajes serán borrados en unos momentos').then(message => {
        message.delete({timeout:3000})
          message.channel.messages.fetch().then((results)=>{
    message.channel.bulkDelete (results)})
    console.log('True Clear Channel')
      });

		} else {
			message.reply('Los mensajes no serán borrados');
		}
	});
    }
} 