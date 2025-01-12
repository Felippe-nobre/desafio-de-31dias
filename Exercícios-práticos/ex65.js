class Forma{
    constructor(){}
    area(){
        return 0
    }
}
class Quadrado extends Forma{
    constructor(lado){
        super();
        this.lado = lado
    }
    area(){
        return this.lado * this.lado
    }
}

class Circulo extends Forma{
    constructor(raio){
        super();
        this.raio = raio
    }
    area(){
        return Math.PI * this.raio * this.raio
    }
}

const quadrado = new Quadrado(4);

const circulo = new Circulo(3);

console.log(`Área do quadrado: ${quadrado.area()}`);
console.log(`Área do círculo: ${circulo.area()}`);
