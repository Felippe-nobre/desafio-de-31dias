function multiplicarMatriz(matriz, multiplicador) {
    return matriz.map(linha => linha.map(valor => valor * multiplicador));
  }
  const matrizMultiplicada = multiplicarMatriz([[1, 2], [3, 4]], 2);
console.log("Matriz multiplicada:", matrizMultiplicada);