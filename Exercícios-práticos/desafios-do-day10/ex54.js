class ContaBancaria{
    constructor(depositar, sacar){
        this.depositar = depositar;
        this.sacar = sacar;
    }
    conta(){
        console.log(`Deposito: ${this.depositar}, Saque: ${this.sacar}`);
    }
}

let conta = new ContaBancaria(1000, 500);
conta.conta();