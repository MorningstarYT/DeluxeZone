module.exports = {
  category: 'Moderación',
  description: 'Ves la información del usuario mencionado',
  minArgs: 1,
  guildOnly: true,
  maxArgs: 1,
  expectedArgs: '<@Usuario>',
ownerOnly: true,
  callback:({message,args,text})=>{
    const Discord = require('discord.js')

    const member = message.mentions.members.first() || message.member

    function formatDate (template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }


    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM") //La misma mierda de siempre xD defines el color en random
        .setDescription("**INFORMACIÓN DEL USUARIO:**") //Defines la descripcion
        .setThumbnail(member.user.displayAvatarURL())
        .addField("**<a:Discord:813819636662403102> Nombre**:", "**" + `${member.user.tag}` + "**")//Que envíe el tag del usuario
        .addField("**🎟 ID**:", `${member.user.id}` )//Id del usuario
        .addField("**🛎 Fecha de Ingreso al Servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))//La fecha de ingreso del usuario al servidor
        .addField("**📥 Cuenta Creada:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt))//Cuando fue creada la cuenta
        .addField("**🎮  Jugando**:", member.user.presence.game != null ? user.presence.game.name : "Nada", true)//Si esta jugando a algo, que indique el juego
        .addField("**<:book_n_quill:811892810604609556> Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))//Los roles que posee dicho usuario(Si la cantidad de roles del usuario excede el numero de caracteres que soporta un field, dará un error de sintaxis a la consola, si es así encuentren una manera de hacerlo ustedes mismos)
        .addField("**🚀 ¿Boostea?**:", member.premiumSince ? '**Estoy boosteando <a:boost:813819652920705115>**' : '**No estoy boosteando**')//si esta o no boosteando el servidor
        .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))//y el avatar del usuario
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)//nombre y avatar del usuario en el footer
     message.channel.send(embed)//enviamos el embed

  }
}