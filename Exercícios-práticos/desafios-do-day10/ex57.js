class agenda{
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email
    }
    contatos(){
        console.log(`Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}`)
    }
}

const exibirContatos = new agenda ("Felippe", "11947147713", "felippenobre@gmail")
exibirContatos.contatos()
