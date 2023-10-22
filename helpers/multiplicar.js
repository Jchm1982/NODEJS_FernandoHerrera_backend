const fs =require('fs');
const colors = require('colors');

const crearArchivo = async(numero=5,listar=false,hasta=9) =>{
   
   try{
      
      let salida ='';
      let consola='';
   
      for (let i = 1; i <= hasta; i++) {
         //salida += (numero + ' X ' +i+ ' = '+operacion);
         salida += `${numero} X ${ i } = ${numero * i}\n`;
         consola += `${numero} ${'X'.blue} ${ i } ${'='.rainbow} ${numero * i}\n`;
      }
      if(listar){
         console.log('====================='.green);
         console.log(`  Tabla del: `.green, colors.blue(numero));
         console.log('====================='.yellow);
         console.log(salida);
      }
      
   
   
      fs.writeFileSync(`./salida/tabla-${numero}.txt`,salida);
   
      return `tabla-${numero}.txt`;
      
   
   }catch(err){
      throw err;
   }

   
}

module.exports = {
   crearArchivo
}