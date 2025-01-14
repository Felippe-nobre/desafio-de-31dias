// Classe base Funcionario
class Funcionario {
    constructor(nome, salarioBase) {
      this.nome = nome;
      this.salarioBase = salarioBase;
    }
  
    // Método genérico para calcular salário
    calcularSalario() {
      return this.salarioBase;
    }
  }
  
  // Subclasse Desenvolvedor
  class Desenvolvedor extends Funcionario {
    constructor(nome, salarioBase, bonusDesempenho) {
      super(nome, salarioBase);
      this.bonusDesempenho = bonusDesempenho;
    }
  
    // Sobrescrevendo o método calcularSalario
    calcularSalario() {
      return this.salarioBase + this.bonusDesempenho;
    }
  }
  
  // Subclasse Gerente
  class Gerente extends Funcionario {
    constructor(nome, salarioBase, bonusGerencial, equipe) {
      super(nome, salarioBase);
      this.bonusGerencial = bonusGerencial;
      this.equipe = equipe; // número de pessoas na equipe
    }
  
    // Sobrescrevendo o método calcularSalario
    calcularSalario() {
      return this.salarioBase + this.bonusGerencial + this.equipe * 100;
    }
  }
  
  // Exemplo de uso
  const dev = new Desenvolvedor("Felipe", 5000, 1000);
  const gerente = new Gerente("Ana", 8000, 2000, 5);
  
  console.log(`Salário do Desenvolvedor (${dev.nome}): R$ ${dev.calcularSalario()}`);
  console.log(`Salário do Gerente (${gerente.nome}): R$ ${gerente.calcularSalario()}`);
  