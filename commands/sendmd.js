module.exports = {
  category:'Moderación',
  description: 'Envia un mensaje privado al usuario mencionado',
  guildOnly: true,
  minArgs: 2,
  maxArgs: -1,
  expectedArgs  : '<@Usuario> <Mensaje>',
  requiredPermissions: ['MANAGE_MESSAGES'],
  callback: ({message, args}) => {
    message.delete()
    let user = message.mentions.members.first();//Definimos el usuario mediante una menciÃÂ³n
let mensaje = args.slice(1).join(' ');//Definimos el texto del mensaje a enviar

if(!user) return message.channel.send("No haz mencionado a nadie") //Enviamos un mensaje si no has mencionado a nadie
if(!mensaje) return message.channel.send("No haz escrito el mensaje a enviar") //Enviamos un mensaje si no se ha escribido el mensaje a enviar

user.send(mensaje) //Enviamos el mensaje al user
message.channel.send("Mensaje enviado exitosamente")
  }
}