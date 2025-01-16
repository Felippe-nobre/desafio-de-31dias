class Pessoa{
    constructor(nome){
        this.nome = nome;
        this.filhos = [];
    }
    adicionarFilho(filho){
        this.filhos.push(filho);
    }

}

const avo = new Pessoa('Luiz');
const pai = new Pessoa("Carlos");
const filho = new Pessoa("Pedro");

avo.adicionarFilho(pai);
pai.adicionarFilho(filho);

console.log(avo);