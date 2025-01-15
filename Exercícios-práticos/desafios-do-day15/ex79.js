class RestauranteFila {
    constructor() {
        this.fila = [];
    }

    adicionarCliente(cliente) {
        this.fila.push(cliente);
        console.log(`Cliente ${cliente} entrou na fila.`);
    }

    atenderCliente() {
        if (this.fila.length > 0) {
            const cliente = this.fila.shift();
            console.log(`Atendendo cliente ${cliente}.`);
        } else {
            console.log("Nenhum cliente na fila.");
        }
    }
}

// Exemplo de uso
const restaurante = new RestauranteFila();
restaurante.adicionarCliente("João");
restaurante.adicionarCliente("Maria");
restaurante.atenderCliente();
restaurante.atenderCliente();
restaurante.atenderCliente();
