'use strict'

//4- Crear una matriz de 3x3 e inicializar todos sus elementos en null con un bucle. Mostrarla entera en consola. Deberia quedar:





let matriz = [[], [], []];

for(let columna in matriz){
    for(let insert = 0; insert < 3; insert++){
        matriz[columna].push(null);
    }
}

console.log(matriz);