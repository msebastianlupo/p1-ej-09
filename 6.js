'use strict'

//6- Crear una matriz de 3x3 vacia (valores null por defecto), pedir por prompt para cargar solo la primer columna y mostrar la matriz entera.




let matriz = [[null, null, null], [null, null, null], [null, null, null]];

for(let columna in matriz){
    matriz[columna][0] = prompt(`Ingrese valor ${parseInt(columna) + 1} para la matriz`);
}

console.log(matriz);