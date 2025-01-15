class SistemaMensagens {
    constructor() {
        this.fila = [];
    }

    adicionarMensagem(mensagem) {
        this.fila.push(mensagem);
        console.log(`Mensagem adicionada: ${mensagem}`);
    }

    enviarMensagens() {
        if (this.fila.length > 0) {
            while (this.fila.length > 0) {
                const mensagem = this.fila.shift();
                console.log(`Enviando mensagem: ${mensagem}`);
            }
        } else {
            console.log("Nenhuma mensagem para enviar.");
        }
    }
}

// Exemplo de uso
const sistema = new SistemaMensagens();
sistema.adicionarMensagem("Olá, cliente!");
sistema.adicionarMensagem("Promoção: 50% OFF!");
sistema.enviarMensagens();
sistema.enviarMensagens();
