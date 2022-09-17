'use strict'

//5- Crear una matriz de 3x3 vacia (valores null por defecto), pedir por prompt para cargar solo la primer fila y mostrar la matriz entera. Ejemplo:





let matriz = [[null, null, null], [null, null, null], [null, null, null]];

for(let valor in matriz[0]){
    matriz[0][valor] = prompt(`Ingrese valor ${parseInt(valor) + 1} para la matriz`);
}

console.log(matriz);