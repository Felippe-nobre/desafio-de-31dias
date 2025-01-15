class SupermercadoFila {
    constructor() {
        this.fila = [];
    }

    entrarNaFila(cliente) {
        this.fila.push(cliente);
        console.log(`Cliente ${cliente} entrou na fila do caixa.`);
    }

    processarCompra() {
        if (this.fila.length > 0) {
            const cliente = this.fila.shift();
            console.log(`Processando compra do cliente: ${cliente}`);
        } else {
            console.log("Nenhum cliente na fila do caixa.");
        }
    }
}

// Exemplo de uso
const supermercado = new SupermercadoFila();
supermercado.entrarNaFila("Alice");
supermercado.entrarNaFila("Bob");
supermercado.processarCompra();
supermercado.processarCompra();
supermercado.processarCompra();
