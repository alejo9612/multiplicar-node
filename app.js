const argv = require ('./config/yargs').argv;
const colors = require('colors');
// para avitar colocar esto = argv.argv se deja como esta al principio

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; // hace referencia al array con el _

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}

console.log(argv);
/*
let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}
// console.log(argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1]
*/
//En caso de presentar problemas se puede ver el video 30 al 34