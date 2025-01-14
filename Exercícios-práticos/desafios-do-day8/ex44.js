

function contarPares(matriz) {
    return matriz.flat().filter(valor => valor % 2 === 0).length;
  }
  
console.log("Quantidade de números pares:", contarPares([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Quantidade de números pares: 4 (4, 8, 12, 16)pares);