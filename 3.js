'use strict'

//3- Crear una matriz de 3x2 (tres filas, dos columnas) e imprimir en la consola cada elemento.



let matriz = [[1, 2], [3, 4], [5, 6]];

for(let columna in matriz){
    for(let num of matriz[columna]){
        console.log(num);
    }
}