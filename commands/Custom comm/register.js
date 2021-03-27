module.exports = {
  category: 'Comandos',
  guildOnly: true,
  description: 'Te da una pequeña explicacion del register en el servidor de minecraft',
  maxArgs: 1,
  aliases: ['login'],
  expectedArgs: '<@Usuario> (Opcional)',
  callback: ({ message }) =>{
    const {MessageEmbed} = require('discord.js')
    let user = message.mentions.users.first();
    if (!user) {
      const embed1 = new MessageEmbed()
      .setAuthor('DeluxeNETWORK', client.user.displayAvatarURL())
      .setTitle('¿Problemas para registrarte?')
      .addField('<a:Yes:807065206202302464> ¿Como registrarte en DeluxeNETWORK?', '- Deberás entrar al servidor y colocar en el chat el siguiente comando: `/register (contraseña) (contraseña)`\n**Recuerda NO darle tu contraseña a nadie**')
      .addField('<a:Yes:807065206202302464> ¿Como iniciar sesión?', '- Deberás entrar al servidor y colocar el siguiente comando: `/login (contraseña)`')
      .addField("<a:Yes:807065206202302464> **¿Como cambiar mi contraseña?**\n -Si quieres cambiar tu contraseña, utiliza el comando `/changepassword (Contraseña actual) (Contraseña nueva)`", 'En caso de no recordar tu contraseña solicita cambiarla en <#805174183189413888>')
      .setFooter('En el proceso de logeo, tienes que usar la contraseña usada en el proceso de registro')
       message.reply(embed1)
    }else {
      const embed2 = new MessageEmbed()
      .setTitle('¿Problemas para registrarte?')
      .setThumbnail('https://cdn.discordapp.com/icons/805142489392480316/f0537856929dc4a43aa8d348b2d5f800.png?size=256')
      .addField('<a:Yes:807065206202302464> ¿Como registrarte en DeluxeNETWORK?', '- Deberás entrar al servidor y colocar en el chat el siguiente comando: `/register (contraseña) (contraseña)`\n**Recuerda NO darle tu contraseña a nadie**')
      .addField('<a:Yes:807065206202302464> ¿Como iniciar sesión?', '- Deberás entrar al servidor y colocar el siguiente comando: `/login (contraseña)`')
      .addField("<a:Yes:807065206202302464> **¿Como cambiar mi contraseña?**\n -Si quieres cambiar tu contraseña, utiliza el comando `/changepassword (Contraseña actual) (Contraseña nueva)`", 'En caso de no recordar tu contraseña solicita cambiarla en <#805174183189413888>')
      .setFooter('En el proceso de logeo, tienes que usar la contraseña usada en el proceso de registro')
    message.channel.send(`${user}`, embed2);
    }


     /*\n**Para registrarte en DeluxeZone, deberás escribir el siguiente comando:** \`/Register <contraseña> <contraseña>\`\n\n**• Recuerda no compartir tu contraseña con nadie**\n \n**Si quieres cambiar tu contraseña, usá este comando:** \n\`/Changepassword <contraseña actual> <contraseña nueva>\`*/
  }
}