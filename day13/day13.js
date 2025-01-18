class Forma {
    calcularArea() {
      console.log("Área da forma genérica.");
    }
  }
  
  class Quadrado extends Forma {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    calcularArea() {
      console.log(`Área do quadrado: ${this.lado * this.lado}`);
    }
  }
  
  class Circulo extends Forma {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      console.log(`Área do círculo: ${Math.PI * this.raio ** 2}`);
    }
}
const quadrado = new Quadrado(10);
const circulo = new Circulo(10);

quadrado.calcularArea(); // Saída: Área do quadrado: 100
circulo.calcularArea(); // Saída: Área do círculo: 314