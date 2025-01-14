class Animal{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`${this.nome} faz barulho`);
    }
}

class Cachorro extends Animal{
    constructor(nome,raca){
        super(nome);
        this.raca = raca;
    }
    falar(){
        console.log(`${this.nome} da raca ${this.raca} latiu`);
    }
}

class Gato extends Animal{
    constructor(nome,raca){
        super(nome)
        this.raca = raca;
    }
    falar(){
        console.log(`${this.nome} da raca ${this.raca} miou`);
    }
}

let cachorro1 = new Cachorro("Zeus", "yorshire");
cachorro1.falar();

let gato1 = new Gato("Cheader", "siames");
gato1.falar();
