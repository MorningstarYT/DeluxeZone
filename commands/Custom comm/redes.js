module.exports = {
  category:'Comandos',
  description: 'Te brinda las redes del servidor!',
  slash: 'both',
  guildOnly: true,
  callback: ({message, client}) => {
    const { MessageEmbed } = require('discord.js')

    const redes = new MessageEmbed()
    .setAuthor('DELUXE NETWORK', client.user.displayAvatarURL())
    .setTitle("Redes del servidor")
    .addField(' <:TikTokLogo:823045357172817962>TikTok: ', '[Presiona aqui!](https://www.tiktok.com/@deluxezonemc?lang=es)')
    .addField('<:InstagramLogoo:820537731348168704>Instagram: ', '[Presiona aqui!](https://instagram.com/deluxezonemc?igshid=zxkedgilk94e)')
    .addField(" <:YouTube:820537701114970163>YouTube ",'[Presiona aqui!](https://www.youtube.com/channel/UCaIpLKARUmD2xlvlDg2KKVw)' )
    .addField('<:twitchh:820537680973660170>Twitch: ', '[Presiona aqui!](https://www.twitch.tv/ol4v_)')
    .setFooter('Siguenos en todas nuestras redes sociales!')

    if(message){
    message.channel.send(redes)
    } else {
      return redes
    }
  }
}