module.exports = {
  category:'Moderación',
  guildOnly: true,
  description: 'Expulsa al usuario mencionado',
  minArgs: 1,
  maxArgs: -1,
  expectedArgs  : '<@Usuario> <Razón>',
requiredPermissions: ['KICK_MEMBERS'],
  callback: ({ message, args }) => {
    message.delete()
      const{member,mentions}=message
    const tag=`<@${member.id}>`
    const target=mentions.users.first()
    const reason= args.slice(1).join(' ')
  if(target){ 
    const targetMember=message.guild.members.cache.get(target.id)
    message.guild.member(target).kick(reason)
    message.channel.send(`**${tag}**, el usuario **${target.tag}** ha sido expulsado, **Razón**: ${reason}`)
  }
}
}