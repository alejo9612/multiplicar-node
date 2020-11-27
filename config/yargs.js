const opts = { //aqui guardamos todo lo que necesitamos ver en el comando y se abrevia para llamarse con opts
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Generaun archivo con la tabla de  multiplicar', opts)
    .help()
    .argv;

    module.exports = {
        argv
    }