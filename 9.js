'use strict'

//9- Crear una matriz de 3x3 vacia (valores null por defecto), pedir por prompt una fila, columna y un valor. Introducir ese valor en la posicion correcta de la matriz. Se puede hacer esto indeterminada cantidad de veces.



let array = [[null, null, null], [null, null, null], [null, null, null]];
let ok;
do{
    ok = false;
    let fila = parseInt(prompt("Ingrese filas del 0 al 2, vacío o valor fuera de rango para terminar"));
    if(fila >= 0 && fila < 3){
        let columna = parseInt(prompt("Ingrese columnas del 0 al 2, vacío o valor fuera de rango para terminar"));
        if(columna >= 0 && columna < 3){
            let valor = prompt("Ingrese un valor");
            ok = true;
            fila = Math.abs(fila);
            columna = Math.abs(columna);
            array[fila][columna] = valor;
        }
    }
}while(ok);

console.log(array);