class Cofre{
    #senha
    constructor(senhaInical){
        this.#senha = senhaInical
    }
    verificarSenha(senha){
        return senha === this.#senha
    }
}

const cofre1 = new Cofre('1234')
cofre1.verificarSenha()
/* ### **Introdução**

Bem-vindo ao **décimo primeiro dia do desafio!** 🎉 Hoje vamos explorar dois conceitos fundamentais da **Programação Orientada a Objetos (POO):** **Encapsulamento** e **Abstração**.

Esses conceitos ajudam a criar sistemas mais organizados, seguros e fáceis de manter.

- **Encapsulamento:** Controla como os dados de um objeto são acessados e modificados, protegendo sua integridade.
- **Abstração:** Esconde detalhes desnecessários do funcionamento interno e expõe apenas o que é essencial para o uso.

Vamos entender como aplicá-los no JavaScript de forma prática e eficiente! 🚀

---

### **📚 O Que é Encapsulamento?**

**Encapsulamento** é como um cofre: você pode interagir com ele através de um painel de senha, mas não tem acesso direto ao seu conteúdo.

No código, isso significa proteger os atributos de uma classe, permitindo acesso ou alteração apenas por métodos específicos (getters e setters).

📌 **Exemplo no código:**

```jsx
class Cofre {
  #senha; // Atributo privado

  constructor(senhaInicial) {
    this.#senha = senhaInicial;
  }

  alterarSenha(novaSenha) {
    this.#senha = novaSenha;
  }

  verificarSenha(senha) {
    return this.#senha === senha;
  }
}

const meuCofre = new Cofre("1234");
console.log(meuCofre.verificarSenha("1234")); // Saída: true
meuCofre.alterarSenha("5678");
console.log(meuCofre.verificarSenha("1234")); // Saída: false
```

---

### **🔍 Como Proteger Atributos no JavaScript?**

### **1. Usando Campos Privados (`#`):**

Os atributos que começam com `#` são privados e só podem ser acessados dentro da própria classe.

```jsx
class Conta {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

const minhaConta = new Conta(1000);
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo()); // Saída: 1500
```

---

### **📚 O Que é Abstração?**

**Abstração** significa **esconder os detalhes internos** e fornecer apenas as funcionalidades importantes.

💡 **Exemplo no mundo real:**

- Ao usar um carro, você não precisa entender como o motor funciona; basta girar a chave e dirigir.

📌 **Exemplo no código:**

```jsx
class Carro {
  ligarMotor() {
    console.log("Motor ligado! 🔑🚗");
  }

  dirigir() {
    console.log("Dirigindo... 🛣️");
  }
}

const meuCarro = new Carro();
meuCarro.ligarMotor(); // Saída: Motor ligado! 🔑🚗
meuCarro.dirigir();    // Saída: Dirigindo... 🛣️
```

📌 **Explicação:**

- O funcionamento interno do motor está "escondido". O usuário só interage com os métodos `ligarMotor` e `dirigir`.

---

### **🔄 Encapsulamento e Abstração Juntos**

Vamos combinar os dois conceitos:

```jsx
class CaixaEletronico {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  sacar(valor) {
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente! ❌");
    } else {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso! ✅`);
    }
  }

  consultarSaldo() {
    console.log(`Saldo atual: R$${this.#saldo}`);
  }
}

const caixa = new CaixaEletronico(1000);
caixa.sacar(500);         // Saída: Saque de R$500 realizado com sucesso! ✅
caixa.consultarSaldo();   // Saída: Saldo atual: R$500
caixa.sacar(600);         // Saída: Saldo insuficiente! ❌
```

---

### **💻 Exemplos Práticos**

**Gerenciador de Tarefas:**

```jsx
class GerenciadorDeTarefas {
  #tarefas;

  constructor() {
    this.#tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.#tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada!`);
  }

  listarTarefas() {
    console.log("Tarefas:");
    this.#tarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}. ${tarefa}`);
    });
  }
}

const gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa("Estudar JavaScript");
gerenciador.listarTarefas();
```

**Validação de Senhas:**

```jsx
class Usuario {
  #senha;

  constructor(senhaInicial) {
    this.#senha = senhaInicial;
  }

  alterarSenha(senhaAtual, novaSenha) {
    if (senhaAtual === this.#senha) {
      this.#senha = novaSenha;
      console.log("Senha alterada com sucesso!");
    } else {
      console.log("Senha atual incorreta!");
    }
  }
}

const usuario = new Usuario("1234");
usuario.alterarSenha("1234", "abcd");  // Saída: Senha alterada com sucesso!
usuario.alterarSenha("1234", "efgh");  // Saída: Senha atual incorreta!
```

---

### **🛠️ Dicas Importantes**

- **Encapsule Sempre que Possível:**
    
    Proteja os dados sensíveis e forneça métodos específicos para acessá-los.
    
- **Mantenha Simples:**
    
    Use a abstração para esconder detalhes irrelevantes e expor apenas o que importa.*/