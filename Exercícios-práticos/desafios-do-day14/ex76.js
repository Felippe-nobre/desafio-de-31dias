class Editor{
    constructor(){
        this.acoes = [];
    }
    realizarAcao(acao){
        this.acoes.push(acao);
        console.log(`Ação realizada: ${acao}`);
    }
    desfazer(){
        if(this.acoes.length === 0){
            throw new Error("Não há ações para desfazer");
        }
        const acao = this.acoes.pop();
        console.log(`Ação desfeita: ${acao}`);
    }
}

const editor = new Editor();
editor.realizarAcao("Criar um novo documento");
editor.realizarAcao("Inserir texto no documento");
editor.desfazer();