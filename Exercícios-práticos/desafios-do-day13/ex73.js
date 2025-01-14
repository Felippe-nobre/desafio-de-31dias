class Forma {
    calcularArea() {
        throw new Error("O método calcularArea() deve ser implementado.");
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}

// Teste
const formas = [new Quadrado(4), new Circulo(3)];
formas.forEach(forma => {
    console.log(`Área da forma: ${forma.calcularArea().toFixed(2)}`);
});
