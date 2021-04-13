
//const { argv, option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');

//const argv = require('yargs').argv;
const argv = require('yargs').argv;
/*    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check( (argv, options) => {
        console.log('yargs',argv);
    })
    .argv;
*/


console.clear();

//console.log( process.argv );
console.log( argv );

console.log( 'base: yargs', argv.base );

// NO CONVIENE HACER ESTO POR POSICION !!!!:
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

/*crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creada') )
    .catch( err => console.log( err ) )
*/