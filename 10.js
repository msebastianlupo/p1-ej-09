'use strict'

//10- Pedir por prompt una cantidad de filas y columnas, crear una matriz de esas dimensiones y luego pedir al usuario por prompt los valores para llenar la matriz.



let array;
let filas;
let columnas;
let valor;

//para crear la matriz "1" será el número mínimo de fila o columna a ingresar

filas = parseInt(prompt("Ingrese número de filas"));
if(filas > 0){
    columnas  = parseInt(prompt("Ingrese número de columnas"));
}

if(filas > 0 && columnas > 0){
    array = [];
    for(let fn = 0; fn < filas; fn++){
        array.push([]);
        for(let cn = 0; cn < columnas; cn++){
            array[fn].push([]);
        }
    }
    //acá las posiciones comienzan en "0"
    do{
        valor = null;
        let fila = parseInt(prompt("En qué fila guardará el valor? Comienza en 0"));
        if(fila >= 0 && fila < filas){
            let columna = parseInt(prompt("En qué columna guardará el valor? Comienza en 0"));
            if(columna >= 0 && columna < columnas){
                valor = prompt("Ingrese el valor");
                array[fila][columna] = valor;
            }
        }

    }while(valor !== null);
}else{
    alert("Valores ingresados son incorrectos. Al menos 1 fila y 1 columna");
}

console.log(array);