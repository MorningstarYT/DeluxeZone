module.exports = {
  category:'Moderación',
  guildOnly: true,
  description: 'Borra el canal en el que se escribe el comando',
  aliases: ['delch', 'deletechannel'],
  minArgs: 0,
  maxArgs: 0,
  requiredPermissions: ['MANAGE_CHANNELS'],
  callback: async({ message, client, args }) => {
    message.channel.send('Estas seguro que quieres borrar el canal?')
    message.react('👍').then(() => message.react('👎'));

    const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('el canal será borrado en unos momentos.').then(message => {
        message.channel.delete({ timeout: 10000 }); //10 Segundos
      });

		} else {
			message.reply('el canal no será borrado');
		}
	});
    
}
}