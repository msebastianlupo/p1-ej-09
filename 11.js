'use strict'

//11- Pedir por prompt una cantidad de filas y columnas, crear dos matrices de esas dimensiones y luego pedir al usuario por prompt los valores para llenar la matriz (deben ser numeros), sumar ambas matrices y mostrar la matriz resultante.


let matriz1;
let matriz2;
let pFilas;
let pColumnas;

pFilas = parseInt(prompt("Ingrese número de filas"));
if(pFilas > 0){
    pColumnas = parseInt(prompt("Ingrese número de columnas"));
}

if(pFilas > 0 && pColumnas > 0){
    matriz1 = [];
    matriz2 = [];
    for(let fl = 0; fl < pFilas; fl++){
        matriz1.push([]);
        for(let cl = 0; cl < pColumnas; cl++){
            matriz1[fl].push(null);
        }
    }
    
    matriz2 = JSON.parse(JSON.stringify(matriz1));
    
    let valor = NaN;
    for(let arrNum in matriz1){
        for(let vl in matriz1[arrNum]){
            while(isNaN(valor)){
                valor = parseInt(prompt(`VALORES PARA LA MATRIZ 1:\n fila: ${arrNum}\n columna: ${vl}`));
            }
            matriz1[arrNum][vl] = valor;
            valor = NaN;
        }
    }

    for(let arrNum in matriz2){
        for(let vl in matriz2[arrNum]){
            while(isNaN(valor)){
                valor = parseInt(prompt(`VALORES PARA LA MATRIZ 2:\n fila: ${arrNum}\n columna: ${vl}`));
            }
            matriz2[arrNum][vl] = valor;
            valor = NaN;
        }
    }
    
    let arraySuma = [];
    for(let arrNum in matriz1){
        arraySuma.push([]);
        for(let vl in matriz1[arrNum]){
            let m1Fila = matriz1[arrNum];
            let m2Fila = matriz2[arrNum];
            let suma = m1Fila[vl] + m2Fila[vl]
            arraySuma[arrNum].push(suma);
        }
    }

    console.log(matriz1);
    console.log(matriz2);
    console.log(arraySuma);

}else{
    alert("Valores ingresados son incorrectos");
}