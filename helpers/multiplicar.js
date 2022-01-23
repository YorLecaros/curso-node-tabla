const fs = require('fs');

// Tarea:
// Mi forma
const crearArchivo1 = ( base = 5 ) => { 
    console.log('======================');
    console.log('     Tabla del:', base);
    console.log('======================');

    let promesa = new Promise((resolve, rejecte) => {

        if(base) {
            let salida = '';

            for (let i = 1; i <= 10; i++) {
                salida += `${ base } x ${ i } = ${ base * i }\n`;
            }

            console.log(salida);

            const nombreTabla = `tabla-${base}.txt`;

            fs.writeFileSync( nombreTabla, salida );
            console.log(`${nombreTabla} creada`);

            resolve(nombreTabla);

        } else {
            rejecte('No se pudo crear el archivo');
        }

    });

    return promesa;
};


// Forma del profesor
// Promesa:
const crearArchivo2 = ( base = 5 ) => { 

    return new Promise((resolve, rejecte) => {

        console.log('======================');
        console.log('     Tabla del:', base);
        console.log('======================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        console.log(salida);

        fs.writeFileSync( `tabla-${base}.txt`, salida );

        resolve(`tabla-${base}.txt`);
    });

};

// Async - await:
const colors = require('colors');

const crearArchivo = async ( base = 5, listar, hasta ) => { 
    
    try {
        

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.brightCyan } ${ i } ${ '='.brightCyan } ${ base * i }\n`;
        }

        if( listar ) {
            console.log('======================'.rainbow);
            console.log('     Tabla del:', colors.green( base ));
            console.log('======================'.rainbow);

            console.log(consola);
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );

        return `tabla-${base}.txt`;
    } catch (error) {
        throw(err);
    }

};



module.exports = {
    crearArchivo: crearArchivo //como hay redundancia tmb se puede
    //colocar o poner así --> crearArchivo
}