module.exports = {
  category:'Comandos',
  description: 'Embed3',
  ownerOnly: true,
  guildOnly: true,
  aliases: ['modalidad'],
  callback: ({message, client}) => {
    const { MessageEmbed } = require('discord.js')

    const modalidad = new MessageEmbed()
    .setTitle('Modalidad')
    .setColor("#611BA2")
    .addField("<a:Minecraft:805776489638658089> SurvivalOP \n<a:minecraftbee:805776498254544928> Semi Vanilla\n<a:Enchanted_netherite_sword:805775572768260099> Survival Anarquico","⠀⠀⠀⠀⠀⠀⠀")

    .setFooter('DeluxeNETWORK - Perfil', client.user.displayAvatarURL())



    message.channel.send(modalidad)
  }
}