module.exports = {
  category:'Comandos',
  description: 'Te da la información del boss ya sea Nosk, Giygas, Mawlek o Spyro',
  guildOnly: true,
  cooldown: '5s',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<Nombre del boss> (Nosk, Giygas, Mawlek, Dhaos o Spyro)',
  callback: ({message, args, client}) => {
    const boss = args.join(' ')
    const boss1 = boss.toLowerCase()
    const {MessageEmbed} = require('discord.js')
    //<a:Yes:807065206202302464> Yes animado
    if(boss1==='spyro'){
      const spyro = new MessageEmbed()
    .setAuthor('Info Boss Spyro', client.user.displayAvatarURL())
      .setThumbnail('https://cdn.discordapp.com/emojis/815486989474070528.png?v=1')
      .addField('<:Flecharoja:820536887688036383> Habilidad Especial: ', '`Te hace volar por los aires.`')
      .addField('<:Flecharoja:820536887688036383> Al golpearlo, otorga: ', '`Nauseas y Levitación`')
      .addField('<:Flecharoja:820536887688036383> Tiempo de reaparición: ','`5 horas`\n' )
      .addField('<:Flecharoja:820536887688036383> Recompensas: ', '`x1 Llave Dungeon - x1 Llave Bosses(Posibilidad: x1 Llave DeluxeZone) +25,000 de dinero.`\n')
      .addField('<:Flecharoja:820536887688036383> Si lo matas obtendrás: ', '`x12 Bloques de diamante\nx24 Bloques de esmeralda\nx1 Huevo de dragón\nx1 Cabeza de dragón\nx1 Llave Killer\n+25,000 de dinero`')
      .setFooter('DeluxeNETWORK - Survival OP - Bosses', client.user.displayAvatarURL())
      //815486989474070528 Spyro Emoji ID
      message.channel.send(spyro)
    } else if (boss1==='mawlek'){
      const mawlek = new MessageEmbed()
    .setAuthor('DeluxeNETWORK', client.user.displayAvatarURL())
    .setTitle("Boss Mawlek")
      .setThumbnail('https://cdn.discordapp.com/emojis/815700146267881502.png?v=1')
      .addField('<:Flecharoja:820536887688036383> Habilidad Especial: ', '`Empujar a todos`')
      .addField('<:Flecharoja:820536887688036383> Característica: ', '`Es inmóvil`')
      .addField('<:Flecharoja:820536887688036383> Al golpearlo, otorga: ', '`Wither`')
      .addField('<:Flecharoja:820536887688036383> Tiempo de reaparición: ','`2 horas`\n' )
      .addField('<:Flecharoja:820536887688036383> Recompensas: ', '`x1 Llave Dungeon - x1 Llave Bosses(Posibilidad: x1 Llave DeluxeZone) +40,000 de dinero.`\n')
      .addField('<:Flecharoja:820536887688036383> Si lo matas obtendrás: ', '`x24 Bloques de diamante\nx42 Bloques de esmeralda\nx1 Llave Killer\n+40,000 de dinero`')
      .setFooter('Survival OP - Bosses')
      message.channel.send(mawlek)
    } else if(boss1==='giygas'){
      const giygas = new MessageEmbed()
      .setAuthor('DeluxeNETWORK', client.user.displayAvatarURL())
      .setTitle('Boss Giygas')
      .setThumbnail('https://cdn.discordapp.com/emojis/815489010013044786.png?v=1')
      .addField('<:Flecharoja:820536887688036383> Habilidad Especial: ', '`Lanza misil con lentitud 3`')
      .addField('<:Flecharoja:820536887688036383> Al golpearlo, otorga: ', '`Nauseas`')
      .addField('<:Flecharoja:820536887688036383> Tiempo de reaparición: ','`2 horas`\n' )
      .addField('<:Flecharoja:820536887688036383> Recompensas: ', '`x1 Llave Dungeon - x1 Llave Bosses - x1 Llave DeluxeZone - x1 Llave Dark - +30,000 de dinero.`\n')
      .addField('<:Flecharoja:820536887688036383> Si lo matas obtendrás: ', '`x16 Bloques de diamante\nx32 Bloques de esmeralda\nx1 Llave Killer\n+30,000 de dinero`')
      .setFooter('Survival OP - Bosses')
      //815489010013044786 GIYGAS Emoji ID
      message.channel.send(giygas)
    } else if(boss1 ==='nosk'){
      const nosk = new MessageEmbed()
      .setAuthor('DeluxeNETWORK', client.user.displayAvatarURL())
      .setTitle('Boss Nosk')
      .setThumbnail('https://cdn.discordapp.com/emojis/815490997474951189.png?v=1')
      .addField('<:Flecharoja:820536887688036383> Habilidad Especial: ', '`Empujar a todos`')
      .addField('<:Flecharoja:820536887688036383> Al golpearlo, otorga: ', '`Ceguera`')
      .addField('<:Flecharoja:820536887688036383> Tiempo de reaparición: ','`1 hora`\n' )
      .addField('<:Flecharoja:820536887688036383> Recompensas: ', '`x1 Llave Dungeon - x1 Llave Bosses - +20,000 de dinero.`\n')
      .addField('<:Flecharoja:820536887688036383> Si lo matas obtendrás: ', '`x8 Bloques de diamante\nx16 Bloques de esmeralda\nx1 Llave Killer\n20,000 de dinero`')
      .setFooter('Survival OP - Bosses')
      //815490997474951189 NOSK Emoji ID
      message.channel.send(nosk)
    } else if (boss1==='dhaos'){
      const dhaos = new MessageEmbed()
      .setAuthor('DeluxeNETWORK', client.user.displayAvatarURL())
      .setTitle('Boss Dhaos')
      .setThumbnail('https://cdn.discordapp.com/emojis/818346861068812342.png?v=1')
      .addField('<:Flecharoja:820536887688036383> Habilidad Especial: ', '`Se duplica haciendo distracción`')
      .addField('<:Flecharoja:820536887688036383> Al golpearlo, otorga: ', '`Lentitud`')
      .addField('<:Flecharoja:820536887688036383> Tiempo de reaparición: ','`2 horas`\n' )
      .addField('<:Flecharoja:820536887688036383> Recompensas: ', '`x1 Llave Dungeon - x1 Llave Bosses (Posibilidad de x1 DeluxeZone) - +50,000 de dinero.`\n')
      .addField('<:Flecharoja:820536887688036383> Si lo matas obtendrás: ', '`x30 Bloques de diamante\nx50 Bloques de esmeralda\nx1 Llave Killer\n+50,000 de dinero`')
      .setFooter('Survival OP - Bosses')
      //818346861068812342 NOSK Emoji ID
      message.channel.send(dhaos)
    } else if(boss1 ==='eon'){
      const eon = new MessageEmbed()
      .setAuthor('DeluxeNETWORK', client.user.displayAvatarURL())
      .setTitle('Eon')
      .setThumbnail('https://cdn.discordapp.com/emojis/815490997474951189.png?v=1')
      .addField('<:Flecharoja:820536887688036383> Habilidad Especial: ', '`Empujar a todos`')
      .addField('<:Flecharoja:820536887688036383> Al golpearlo, otorga: ', '`Ceguera`')
      .addField('<:Flecharoja:820536887688036383> Tiempo de reaparición: ','`1 hora`\n' )
      .addField('<:Flecharoja:820536887688036383> Recompensas: ', '`x1 Llave Dungeon - x1 Llave Bosses - +20,000 de dinero.`\n')
      .addField('<:Flecharoja:820536887688036383> Si lo matas obtendrás: ', '`x8 Bloques de diamante\nx16 Bloques de esmeralda\nx1 Llave Killer\n20,000 de dinero`')
      .setFooter('Survival OP - Bosses')
      //815490997474951189 NOSK Emoji ID
      message.channel.send(eon)
    }
  }
}