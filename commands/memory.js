module.exports = {
  ownerOnly: true,
  slash: 'both',
  description: 'Te da el uso de la memoria del bot',
  guildOnly: true,
  aliases: ['mem'],
  callback: ({message}) =>{
    const Discord = require('discord.js')
const client = new Discord.Client()
const {MessageEmbed} = require('discord.js');
    const OS = require('os'); //os = operative system (sistema operativo), no hay que instalarlo, viene con node.js
const maxMemory = OS.totalmem(); //obtiene la cantidad de bytes de memoria que hay totales de RAM (numero)

function getMemoryUsage() {
    const free = OS.freemem(); //obtiene la cantidad de bytes de memoria que hay disponibles de RAM (numero)

    //la funcion memory lo que hace es pasarlos de un numero gigantesco a algo mas legible por las personas
    return {
        max: memory(maxMemory),
        free: memory(free),
        used: memory(maxMemory - free), //la memoria total menos la memoria libre es la usada
        usedByProcess: memory(process.memoryUsage().rss) //la memoria usada por el proceso
    }
}

function memory(bytes = 0) {
    const gigaBytes = bytes / 1024 ** 3; //1024 ** 3 seria un gigabyte en bytes 
    if(gigaBytes > 1) { //si tenemos mas de 1 gb de memoria
        return `${gigaBytes.toFixed(1)} GB`; //devuelve una string con los gigabytes y un decimal
    }
    const megaBytes = bytes / 1024 ** 2; //1024 ** 2 seria un megabyte en bytes
    if(megaBytes < 10) return `${megaBytes.toFixed(2)} MB`; 
    //si hay menos de 10 megabytes devuelve el valor con 2 decimales
        
    if(megaBytes < 100) return `${megaBytes.toFixed(1)} MB`; 
    //si hay menos de 100 megabytes devuelve el valor con 1 decimal
        
     return `${Math.floor(megaBytes)} MB`; //si hay mas de 100 megabytes, devuelve el valor sin decimales
}

let memoria = getMemoryUsage();
let embed = new Discord.MessageEmbed()
.setTitle('General Console Memory')
  .addField('Max Memory', memoria.max)
  .addField('Free Memory', memoria.free)
  .addField('Memory used by the bot', memoria.usedByProcess)
if(message) {
  message.channel.send({ embed })
} else return embed
  }
}