/*module.exports = {
  category:'Comandos',
  description: 'El bot escribe lo que quieras',
  guildOnly: true,
  minArgs: 0,
  maxArgs: -1,
  expectedArgs: '<Mensaje>',
   requiredPermissions: ['MANAGE_MESSAGES'],
  callback: ({message, args, client}) => {
    message.delete()
    const msg = args.slice(0).join(' ');

    message.channel.startTyping();//Esto hace que el bot comienze a escribir

setTimeout(() => {//Agregamos un setTimeout para que el efecto dure mas
  message.channel.stopTyping()//Hacemos que el bot deje de escribir
  if (!msg) return message.channel.send(`Que voy a decir?`);
    message.channel.send(msg);//enviamos el mensaje

}, 5000);
  }
}*/