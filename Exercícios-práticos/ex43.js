function criarTabuleiroXadrez() {
    const tabuleiro = [];
    for (let i = 0; i < 8; i++) {
      const linha = [];
      for (let j = 0; j < 8; j++) {
        linha.push((i + j) % 2 === 0 ? "⬜" : "⬛");
      }
      tabuleiro.push(linha);
    }
    return tabuleiro;
  }
  
  const tabuleiro = criarTabuleiroXadrez();
  console.log("Tabuleiro de Xadrez:", tabuleiro);