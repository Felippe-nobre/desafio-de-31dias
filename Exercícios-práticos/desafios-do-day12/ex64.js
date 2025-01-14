class Funcionario {
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
    pessoa(){
        console.log(`O nome do funcionário é ${this.nome} e o salário é ${this.salario}` );
    }
}
class Grente extends Funcionario{
    constructor(nome, salario, setor){
        super(nome, salario);
        this.setor = setor;
    }
    gerente(){
        console.log(`O nome do gerente é ${this.nome}, o salário é ${this.salario} e o setor é ${this.setor}`);
    }
}

const funcionario1 = new Funcionario("Felippe", 2000);
const gerente1 = new Grente("Maria", 5000, "TI");

funcionario1.pessoa();
gerente1.gerente();

