const argv = require('yargs')
            .options({
               'n':{
               alias:'numero',
               type:'number',
               demandOption:true,
               describe:'Numero que toma para hacer la Tabla de multiplicar'
            },
            'l':{
               alias:'listar',
               type:'boolean',
               //demandOption:true,
               default:false,
               describe:'Muestra la tabla en consola'
            },
            'h':{
               alias:'hasta',
               type:'number',
               //demandOption:true,
               default:10,
               describe:'Muestra hasta que numero llegara a tabla'
            }
         })
            .check( (argv,options)=>{
               //console.log('estas son las opciones',options);
               //console.log('Yargs',argv);
               if(isNaN(argv.n) ){
                  throw 'La base que se ingresa debe ser un numero'
               }
               return true;
               if(argv.l==true){
                  throw 'la L se solicita';
               }
               return true;
            } )
            .argv;

module.exports = argv;