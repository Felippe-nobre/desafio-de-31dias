class conta{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo
    }
    sacar(valor){
        if(valor > this.#saldo){
            console.log("Saldo insuficiente");
        }else{
            this.#saldo -= valor
            console.log(`Sace realizado de R$${valor}`);
        }
    }
    consultarSaldo(){
        console.log(`Saldo atual de R$${this.#saldo}`);
    }
}

const caixa = new conta(1590);
caixa.sacar(500);
caixa.consultarSaldo();

