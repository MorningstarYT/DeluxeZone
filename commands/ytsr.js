module.exports = {
  category: 'Comandos',
  description: 'Te permite buscar videos',
  guildOnly: true,
  minArgs: 0,
  maxArgs: -1,
  expectedArgs: '<Busqueda>',
  callback: ({message, args}) =>{
    const YouTube = require('youtube-node');
let youTube = new YouTube(); 

youTube.setKey(process.env.YTkey);

let nombreyt = args.slice(0).join(" ")
if(!nombreyt) return  message.channel.send('Debes escribir el contenido a buscar');

message.channel.send(':arrows_counterclockwise: Buscando..!') 
.then(m => {
    youTube.search(args.slice(0).join(' '), 2, function(err, result){
        if(err){
            return console.log(err); 

        }
        if(result.items[0]["id"].videoId == undefined){
            return message.channel.send('¡No se encontraron resultados!'); 

        } else{
            let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link);

        }
    })
})
  }
}