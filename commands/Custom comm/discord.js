module.exports = {
  category: 'Comandos',
  slash: 'both',
 // testOnly: true,
  guildOnly: true,
  description: 'Te da el enlace para invitar a tus amigos al servidor',
  callback: ({ message }) =>{
    if(message){
    message.reply('\n**Esta es la invitación al servidor de discord**\n--->https://discord.gg/q9enwe7v48')
    } else return '\n**Esta es la invitación al servidor de discord**\n--->https://discord.gg/q9enwe7v48'
  }
}