const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.red);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) { //hacemos las tablas con el ciclo for
        console.log(`${base} * ${ i } = ${base * i} \n`); //hacemos al final un salto de línea con \n
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`.red);//indicamos que solo sean numeros
            return;
        }

        let data = ''; //creamos la variable en vacio ya que nos va a guardar los datos que creareamos

        for (let i = 1; i <= limite; i++) { //hacemos las tablas con el ciclo for
            data += `${ base } * ${ i } = ${ base * i }\n`; //hacemos al final un salto de línea con \n
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            //de esta manera propia de node.js hacemos la promesa que 
            //necesitamos en este caso `tablas= hace referencia a la carpeta que
            // hay dentro/tabla-${base}.txt = al tipo de documento que guardaremos`
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

        });

    });

}
module.exports = {
    crearArchivo,
    listarTabla
    //de esta manera hacemo que se pueda llamar en otros archivos 
}