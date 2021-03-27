module.exports = {
  category:'Moderación',
  description: 'Te da la lista de baneos del servidor',
  guildOnly: true,
  ownerOnly: true,
  callback: async({message, args, client}) => {
    message.delete()
    const Discord = require('discord.js')
    const { splitMessage } = require('discord.js')
      
    let perms = message.guild.me.hasPermission("BAN_MEMBERS")
    if (!perms) return message.reply("<:Cross:746056185832013946> | No tengo permisos").then(m => m.delete({ timeout: 6000 })); 
    var blist = await message.guild.fetchBans();
    if(blist.size <= 0) return message.channel.send("<:Cross:746056185832013946> | No hay baneos en el servidor.")
    var bansID = blist.map(b => '**'+b.user.tag +'**: '+ b.user.id).join('\n')
    const description = '**📌 Usuario y ID:** \n'+bansID 

    let embed = new Discord.MessageEmbed()
    .setTitle('Banlist de **'+message.guild.name+'**')
    .setDescription(description)
    .setFooter('Pedido por: '+message.author.username, message.author.displayAvatarURL())
    .setTimestamp()
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 1024}))

    const splitDescription = splitMessage(description, {
        maxLength: 2048,
        char: "\n",
        prepend: "",
        append: ""
    }); 
  
    splitDescription.forEach(async (m) => {
        embed.setDescription(m);
        message.channel.send(embed)/*.then(m => m.delete({ timeout: 20000 }))*/ 
    });
  }
}