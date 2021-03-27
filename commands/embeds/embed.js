module.exports = {
  category:'Comandos',
  description: 'Embed reglas',
  guildOnly: true,
  ownerOnly: true,
  aliases: ['reglas'],
  callback: ({message, client}) => {
    const { MessageEmbed } = require('discord.js')
    const embedtest = new MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())

    const newembed = new MessageEmbed()
    .setTitle('**Reglas del servidor de Minecraft** <a:Minecraft:805776489638658089>')
    .setDescription('Estas reglas solo son aplicadas en las modalidades de **Survival Semi-Vanilla** y **Survival OP**')
    .setThumbnail(client.user.displayAvatarURL())
    .addField(" <:book_n_quill:811892810604609556>**Regla N1**","No Hacer Spam o Flood\n\nSanción: Mute 30min-2Horas")
    .addField("<:book_n_quill:811892810604609556>**Regla N2**","No insultar a cualquier miembro/staff\n\n Sanción: Mute 30min-6hora")
    .addField("<:book_n_quill:811892810604609556>**Regla N3**","No mencionar IPs de otros servidores\n\nSanción: mute 30min.")
    .addField("<:book_n_quill:811892810604609556>**Regla N4**","No hacer TPAKILL\n\nSancion: Carcel 6 horas.")
    .addField("<:book_n_quill:811892810604609556>**Regla N5**","No campear en la salida del /Warp survival\n\nSanción: Cárcel 6 horas")
    .addField("<:book_n_quill:811892810604609556>**Regla N6**","No usar HACKS ni PACK de TEXTURAS que puedan beneficiarte.\n\nSanción: Ban de 7 días - PERMANENTE.")
    .addField("<:book_n_quill:811892810604609556>**Regla N7**","No spamear en el /msg privado\n\nSanción: Mute 30min - 3horas")
    .addField("<:book_n_quill:811892810604609556>**Regla N8**","Dejar crecer a los nuevos, no abusar ni molestarlos.\n\nSanción: Carcel 3 horas.")
    .addField("<:book_n_quill:811892810604609556>**Regla N9**","El 4v1 es ilegal. El PvP rotativo igual\n\nSanción: Ban de 1 día.")
    .addField("<:book_n_quill:811892810604609556>**Regla N10**","No grifear bases.\n\nSanción: Ban 1 día - PERMANENTE.")
    .addField("<:book_n_quill:811892810604609556>**Regla N11**","No toxiquear en el chat del servidor\n\nSanción: ban de 1 dia.")
    .addField("<:book_n_quill:811892810604609556>**Regla N12**","No cuestionar las sanciones de parte del Staff.\n\nSanción Mute 30min - 3 horas")
    .addField("<:book_n_quill:811892810604609556>**Regla N13**","No vender/regalar Kits VIPs\n\nSanción: Jail 12 Horas.")


    .setFooter('DeluxeNETWORK - Reglas', client.user.displayAvatarURL())



    message.channel.send(embedtest)
  }
}