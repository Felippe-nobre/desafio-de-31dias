function somaMatriz(matriz) {
    return matriz.flat().reduce((soma, valor) => soma + valor, 0);
  }

const soma = somaMatriz([[1, 2], [3, 4]]);
console.log("Soma dos elementos:", soma);