module.exports = {
  category:'Moderación',
  description: 'Mutea a un usuario',
  guildOnly: true,
  minArgs: 2,
  maxArgs: -1,
  expectedArgs: '<Usuario> <Razón>',
 // ownerOnly: true,
  requiredPermissions: ['MANAGE_ROLES'],
  callback: async({message, args, client}) => {
        const Discord = require('discord.js')
const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```Por favor menciona el usuario a mutear\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("No te puedo mutear porque eres el autor del mensaje");
    }
    let reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(" \``` Por favor dame una razón para mutear\``` ");
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (!muterole) {
      return message.channel.send("\```Por favor crea un rol con el nombre **Muted** \``` ");
    }
    
    await user.roles.add(muterole);
const embed = new Discord.MessageEmbed()
   .setTitle("Usuario Muteado!")
   .addField(`El usuario`, `${user}`)
   .addField('Por', reason)
   .setColor("GREEN");
    await message.channel.send(embed);
const embed2 = new Discord.MessageEmbed()
.setTitle('Haz sido muteado D:')
.addField('En el servidor', message.guild)
.addField('Por', reason)
.setTimestamp()
    user.send(embed2);
  }
  }