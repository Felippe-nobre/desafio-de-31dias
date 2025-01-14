class CarrinhoDeCompras{
    #itens
    constructor(itens){
        this.#itens = itens
    }
    adicionarItem(item){
        this.#itens.push(item)
        console.log(`Item ${item} adicionado ao carrinho`)
    }
    removerItem(item){
        if (this.#itens.includes(item)) {
            const index = this.#itens.indexOf(item); // Encontrar o índice do item
            this.#itens.splice(index, 1); // Remover o item pelo índice
            console.log(`Item ${item} foi removido do carrinho`);
        } else {
            console.log(`Item ${item} não foi encontrado no carrinho`);
        }
    }

    listarItens(){
        console.log(`Itens no carrinho: ${this.#itens}`)	
    }
}



const carrinho = new CarrinhoDeCompras([])
carrinho.adicionarItem('Arroz')
carrinho.adicionarItem('Feijão')
carrinho.removerItem('Arroz')
carrinho.listarItens()
