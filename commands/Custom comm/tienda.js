module.exports ={
  category: 'Comandos',
  guildOnly: true,
  description: 'Te da la página de la tienda del servidor',
  callback: ({message, client}) => {
    const { MessageEmbed } = require('discord.js')

    const tienda = new MessageEmbed()
    .setAuthor('DeluxeNETWORK', client.user.displayAvatarURL())
    .setTitle("Tienda oficial del servidor")
    .addField("En esta puedes comprar un rango y apoyar al servidor <a:HeartCat:811891001874055199>", '⠀⠀⠀⠀⠀⠀⠀⠀⠀')
    .addField('Link de la Tienda', '[Presiona aqui!](https://tienda.deluxezone.net)')
    .setFooter("Gracias por jugar en DeluxeNETWORK!")

    message.channel.send(tienda)


  }
}
/*('<:Twitch:820037958568247387>Twitch: ', '[Presiona aqui!](https://www.twitch.tv/0lavvvv)')*/