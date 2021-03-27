module.exports = {
  slash: 'both',
  //testOnly: true,
  guildOnly: true,
  ownerOnly: true,
  aliases: 'p',
  description: 'Te da el tiempo de respuesta del bot',
  callback: ({ client, message }) => {

    let ping = Math.floor(client.ws.ping);

    const texto = `Consola General :ping_pong: Pong!, ${ping}ms`
    
    if(message) {
      message.channel.send(texto)
    }else return message.channel.send(texto)
  },
}