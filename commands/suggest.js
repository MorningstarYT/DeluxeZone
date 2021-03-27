module.exports ={
  category: 'Comandos',
  description: 'Te permite crear una sugerencia',
  minArgs: 1,
  maxArgs: -1,
  expectedArgs: '<Sugerencia>',
  callback: ({message, client}) =>{
    const { MessageEmbed } = require('discord.js')
    let args = message.content.slice(process.env.prefix.length).split(' ');
let cont = args.shift().toLowerCase()
    const sugerencia = args.slice(0).join(' ')
   const canalId = '805245064807710752'
   const canalPruebas = '805809657645105153'
  const canal = message.guild.channels.cache.find(channel => channel.id === `${canalId}`) 
  const emojiYes = '<a:Yes:807065206202302464>'
  const emojiNo = '<a:No:807065223138770994>'
  message.react('<a:Yes:807065206202302464>')
  message.delete({ timeout: 2500 });
const embed = new MessageEmbed()
.setTitle("<a:Pixel_Book:811890784810041354> ● Nueva Sugerencia")
    .setDescription(sugerencia)//////Pones la sugerencia
    .setFooter("Sugerencia enviada por: " + message.author.tag) //// Ponemos por quien fue enviada (esto lo pueden sacar si quieren)
    .setColor("DARK_NAVY")
    .setThumbnail(`${message.author.displayAvatarURL()}`)
canal.send(embed).then(m => {///// Enviamos el embed y hacemos que el bot reaccion con estos emojis
        m.react(emojiYes),
        m.react(emojiNo)
    })
  }
}