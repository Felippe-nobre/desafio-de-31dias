function substituirMaioresQue10(matriz) {
    return matriz.map(linha => linha.map(valor => (valor > 10 ? 0 : valor)));
  }
  const matrizModificada = substituirMaioresQue10([[5, 12, 7], [18, 9, 4]]);
console.log("Matriz com valores > 10 substituídos por 0:", matrizModificada);