class GerenciadorProcessos {
    constructor() {
        this.fila = [];
    }

    adicionarProcesso(processo) {
        this.fila.push(processo);
        console.log(`Processo ${processo} adicionado à fila.`);
    }

    executarProcesso() {
        if (this.fila.length > 0) {
            const processo = this.fila.shift();
            console.log(`Executando processo: ${processo}`);
        } else {
            console.log("Nenhum processo pendente.");
        }
    }
}

// Exemplo de uso
const gerenciador = new GerenciadorProcessos();
gerenciador.adicionarProcesso("Processo 1");
gerenciador.adicionarProcesso("Processo 2");
gerenciador.executarProcesso();
gerenciador.executarProcesso();
gerenciador.executarProcesso();
