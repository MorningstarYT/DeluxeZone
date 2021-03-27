module.exports = {
  category:'Comandos',
  description: 'Ventajas del partner',
  ownerOnly: true,
  guildOnly: true,
  callback: ({message, client}) => {
    message.delete()
    const { MessageEmbed } = require('discord.js')

    const partner = new MessageEmbed()
    .setAuthor('DELUXE NETWORK', client.user.displayAvatarURL())
    .setColor("#360878")
    .setTitle('Partner Requisitos/Ventajas')
    .addField("En este canal puedes hablar con algun staff sobre adquirir el partner para poder solicitar el partner necesitas lo siguiente","<:Redarrow:819192057746030623> __**Requisitos**__\n **YouTube**\nTener 10k de suscriptores en YouTube\n publicar videos en tu canal los cuales tengan mas de 2k de visitas\n ")
    .addField("**TikTok**","tener 20k de seguidores publicar videos en tu cuenta de TikTok y tener 10k de visitas")
    .addField("**Twitch**","Tener 20 suscriptores 300 seguidores y subir directos los cuales tengan mas de 30 viewers")
    .addField("<:Redarrow:819192057746030623> __**Ventajas**__","**Canal de spam**\nen este podras hacer spam de todo tipo contenido por ejemplo:Servidor de discord propio,Nuevos Videos y Streams <#825264540806545438> ")
    .addField("Codigos de descuentos","Estos se consiguen dependiendo de cuanta gente se una al servidor si se unen 15 personas se te da un codigo de descuando que lo puedes usar tu o tus seguidores")
    .addField("Rango custom","tanto como en el servidor de discord y en el de Minecraft se te dara un rango global el cual sera unico con ciertos cosmeticos y ventajas en algunas modalidades")


    .setFooter('DeluxeNETWORK - Partner')



    message.channel.send(partner)
  }
}