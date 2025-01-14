class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    saudacao(){
        console.log(`Bem vindo, ${this.nome}`)
    }
}

const pessoa = new Pessoa("Felippe")
pessoa.saudacao()