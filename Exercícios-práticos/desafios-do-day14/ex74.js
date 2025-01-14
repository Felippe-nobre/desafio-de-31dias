class Pilha{
    constructor(){
        this.item = []
    }
    push(valor){
        this.item.push(valor)
    }
    estaVazia(){
        return this.item.length === 0
    }
    pop(){
        if(this.estaVazia()){
            throw new Error("Pilha está vazia")
        }
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length - 1]
    }
}

const pilha = new Pilha();
pilha.push(2);
pilha.push(1);
pilha.push(3);

console.log(pilha.peek());

pilha.pop();

console.log(pilha.peek());