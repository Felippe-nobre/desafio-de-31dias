class Veiculo{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    informacoes(){
        console.log(`A marca do veiculo é ${this.marca} e o modelo é ${this.modelo}`);
    }
}

class Carro extends Veiculo{
    constructor(marca,modelo,numePortas){
        super(marca,modelo);
        this.numePortas = numePortas;
    }
}

class Moto extends Veiculo{
    constructor(marca,modelo){
        super(marca,modelo);
    }
    darGrau(){
        console.log(`A marca da moto é ${this.marca} e o modelo é ${this.modelo}`);
    }
}

const carro1 = new Carro("Chevrolet", "Onix", 4);
carro1.informacoes();

const moto1 = new Moto("Honda", "Biz");
moto1.darGrau();
