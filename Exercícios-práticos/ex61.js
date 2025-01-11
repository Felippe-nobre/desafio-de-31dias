class Cofre{
    #senha
    #valores
    constructor(senhaCorreta,valores){
        this.#senha = senhaCorreta
        if(senhaCorreta === '1234'){
            console.log('Senha correta')
            this.#valores = valores
            
            switch(valores){
                case 1:
                    console.log('Voce recebeu R$ 100,00')
                    break
                case 2:
                    console.log('Voce recebeu R$ 50,00')
                    break
                case 3:
                    console.log('Voce recebeu R$ 20,00')
                    break
            }
        }else{
            console.log('Senha incorreta')
        }  
        
    }
   
}

const cofre = new Cofre('1234',1)
cofre.senhaCorreta