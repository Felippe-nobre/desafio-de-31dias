class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Deposito de ${valor} realizado com sucesso`);
    }

}
class ContaPoupanca extends Conta{
    constructor(saldo, juros){
        super(saldo);
        this.juros = juros;
    }
    calcularJuros(){
        return this.saldo * this.juros;
    }
    saldoComJuros() {
        const saldoAtualizado = this.saldo + this.calcularJuros();
        console.log(`O saldo da conta poupança com os juros é de ${saldoAtualizado}.`);
        return saldoAtualizado;
    }

}

let conta1 = new ContaPoupanca(100, 0.1);
conta1.depositar(50);
conta1.saldoComJuros();




