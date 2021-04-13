const fs = require('fs');

const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    
    try {
        
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${ base * i}\n`;
        }

        if ( listar ) {
            console.log('================');
            console.log('  Tabla del: ', colors.blue( base) );
            console.log('================');
            
            console.log(salida);
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );

        return `Tabla del ${base}`;
    
    } catch ( err ) {
        throw err;
    }
        
}

/* module.exports = {
    crearArchivo: crearArchivo
} // puede reducirse a: */

module.exports = {
    crearArchivo
}