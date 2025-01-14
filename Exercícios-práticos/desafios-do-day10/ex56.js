class calulo{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2
    }
    soma(){
        return this.num1 + this.num2
    }
    subtracao(){
        return this.num1 - this.num2
    }
    multiplicacao(){
        return this.num1 * this.num2
    }
    divisao(){
        return this.num1 / this.num2
    }
}

const calcular = new calulo(10, 5);
console.log("Soma:", calcular.soma());
console.log("Subtracao:", calcular.subtracao());
console.log("Multiplicacao:", calcular.multiplicacao());
console.log("Divisao:", calcular.divisao());