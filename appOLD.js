
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();
// NO CONVIENE HACER ESTO POR POSICION !!!!:
const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creada') )
    .catch( err => console.log( err ) )
