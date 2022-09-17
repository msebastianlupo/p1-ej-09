'use strict'

//8- Pedir por prompt una cantidad de filas y de columnas, crear una matriz de esas dimensiones.





let filas = parseInt(prompt("Ingrese cantidad de filas"));
let columnas = parseInt(prompt("Ingrese cantidad de columnas"));
let array = [];

if(filas && columnas){
    filas = Math.abs(filas);
    columnas = Math.abs(columnas);
    for(let fil = 0; fil < filas; fil++){
        array.push([]);
        for(let col = 0; col < columnas; col++){
            array[fil].push(null);
        }
    }
console.log(array);



}else{
    if(confirm("No ingresó valores numéricos. Recargar?")){
        location.reload();
    };
}