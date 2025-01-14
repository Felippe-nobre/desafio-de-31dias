class Transporte {
    mover() {
        console.log("O transporte está se movendo.");
    }
}

class Carro extends Transporte {
    mover() {
        console.log("O carro está andando na estrada.");
    }
}

class Aviao extends Transporte {
    mover() {
        console.log("O avião está voando no céu.");
    }
}

class Barco extends Transporte {
    mover() {
        console.log("O barco está navegando no mar.");
    }
}

// Teste
const transportes = [new Carro(), new Aviao(), new Barco()];
transportes.forEach(transporte => transporte.mover());
