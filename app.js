//const { boolean} = require('yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');



console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('Tabla del numero',argv.numero);
/*
console.log(process.argv);
const [ , ,arg3='numero=2'] = process.argv;
//const[,base=5] = arg3.split('=');
const[,numero=5] = arg3.split('=');
//console.log(base);
*/

//const numero = 16;

crearArchivo(argv.n,argv.l,argv.h)
   .then( nombreArchivo => console.log(nombreArchivo.rainbow,'Creado') )
   .catch( err=>console.log(err) );