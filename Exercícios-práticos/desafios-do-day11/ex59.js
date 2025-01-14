class Usuario{
    #senha
    constructor(senhaInical){
        this.#senha = senhaInical
    }
    alterarSenha(senhaAtual, senhaNova){
        if(senhaAtual === this.#senha){
            this.#senha = senhaNova
            console.log("Senha alterada com sucesso!") 
        }else{
            console.log("Senha atual incorreta!")
        }
    }
}

const usuario1 = new Usuario("123456")
usuario1.alterarSenha("123456", "654321")
