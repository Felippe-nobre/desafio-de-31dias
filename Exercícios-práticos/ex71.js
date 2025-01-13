class Animal {
    emitirSom() {
        console.log("O animal está emitindo um som.");
    }
}

class Passaro extends Animal {
    emitirSom() {
        console.log("O pássaro está cantando: Piu piu!");
    }

    voar() {
        console.log("O pássaro está voando.");
    }
}

class Peixe extends Animal {
    emitirSom() {
        console.log("O peixe não emite sons audíveis para humanos.");
    }

    nadar() {
        console.log("O peixe está nadando.");
    }
}

// Teste
const animais = [new Passaro(), new Peixe()];
animais.forEach(animal => animal.emitirSom());
