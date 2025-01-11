class Cofre{
    #senha
    constructor(senhaInical){
        this.#senha = senhaInical
    }
    verificarSenha(senha){
        return senha === this.#senha
    }
}

const cofre1 = new Cofre('1234')
cofre1.verificarSenha()
