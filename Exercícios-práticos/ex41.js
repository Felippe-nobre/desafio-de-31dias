function criarMatriz3x3() {
    const matriz = [];
    let numero = 1;
    for (let i = 0; i < 3; i++) {
      const linha = [];
      for (let j = 0; j < 3; j++) {
        linha.push(numero++);
      }
      matriz.push(linha);
    }
    return matriz;
  }
  const matriz3x3 = criarMatriz3x3();
console.log("Matriz 3x3:", matriz3x3);
