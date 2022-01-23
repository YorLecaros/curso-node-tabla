//importando libreria fs
const fs = require('fs');
const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
//importando yargs
const argv =  require('./config/yargs');


console.clear(); //sirve para limpiar consola automáticamente

console.log( process.argv );
console.log( argv );

console.log('base: yargs', argv.base, argv.listar, argv.hasta);


//Tarea:
// option('l')
// listar
// boolean
// default: false

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err));



/* const [ , , arg3 = 'base=5' ] = process.argv; 
const [ , base = 5 ] = arg3.split('='); */


/* const base = 3; */

/* crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)); */


/* console.log('======================');
console.log('     Tabla del: 5     ');
console.log('======================');


// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50



//Mi forma
for(let i = 1; i < 11; i++) {

    let resultado = 5 * i;

    console.log('5 x ' + i + ' = ' + resultado);

}

//Forma del profesor
const base = 3;
let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `${ base } x ${ i } = ${ base * i }\n`;
}

console.log(salida);

// Creando archivo de texto
fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creada`);
} );

//Otra forma
fs.writeFileSync( `tabla-${base}.txt`, salida );

console.log(`tabla-${base}.txt creada`); */