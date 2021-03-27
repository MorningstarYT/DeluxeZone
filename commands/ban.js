module.exports = {
  category:'Moderación',
  guildOnly: true,
  description: 'Banea al usuario mencionado',
  minArgs: 1,
  maxArgs: -1,
expectedArgs  : '<@Usuario> <Razón>',
ownerOnly: true,
 // requiredPermissions: ['BAN_MEMBERS'],
  callback: ({ message, args, client }) => {
          message.delete()
      const{member,mentions}=message
    const tag=`<@${member.id}>`
    const target=mentions.users.first()
    const reason= args.slice(1).join(' ')
  if(target){ 
    const targetMember=message.guild.members.cache.get(target.id)
    message.guild.members.ban(target.id, { reason: reason })
    message.channel.send(`**${tag}**, el usuario **${target.tag}** ha sido baneado, **Razón**: ${reason}`)
  }
}
}