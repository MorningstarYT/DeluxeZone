module.exports = {
  category:'Moderación',
  description: 'Desmutea a un usuario',
  guildOnly: true,
  minArgs: 1,
  maxArgs: 2,
  expectedArgs: '<Usuario>',
  //ownerOnly: true,
  requiredPermissions: ['MANAGE_ROLES'],
  callback: async({message, args, client}) => {
    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Menciona al usuario a el que se le quitará el mute");
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");
    let memberRole =message.guild.roles.cache.find(x => x.name === 'Miembro');

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("El usuario mencionado no tiene el rol **Muted**");
    }

    user.roles.remove(muterole)
    user.roles.add(memberRole)
    await message.channel.send(`**<@${user.id}>** ya no esta muteado`);

    user.send(`Ya no estas muteado del servidor **${message.guild.name}**`);
    
    message.delete()
  }
}