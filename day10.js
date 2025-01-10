class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    acelerar(){
        console.log(`${this.marca} - ${this.modelo} está acelerando`);
    }
}

const carro1 = new Carro("Toyta", "Corolla", "Preto");
carro1.acelerar();
const carro2 = new Carro("Honda", "Civic", "Branco");
carro2.acelerar();

/* 
### **Introdução**

Bem-vindo ao **décimo dia do desafio!** 🎉 Hoje vamos entrar no mundo da **Programação Orientada a Objetos (POO)** e explorar os conceitos de **Classes e Objetos**.

Na vida real, vemos objetos ao nosso redor: carros, pessoas, animais. Cada objeto tem **características** (atributos) e **ações** (métodos). Na programação, usamos **classes** para descrever essas características e ações, e os **objetos** são as instâncias dessas classes.

Vamos aprender como criar e usar classes e objetos no JavaScript, com exemplos práticos para solidificar o aprendizado. 🚀

---

### **📚 O Que São Classes e Objetos?**

- **Classe:** É o "molde" ou "modelo" que define as características (atributos) e comportamentos (métodos) de um objeto.
- **Objeto:** É a **instância** de uma classe, ou seja, algo criado a partir do molde.

💡 **Exemplo no mundo real:**

- Classe: **Carro** (com atributos como marca, modelo e cor, e métodos como acelerar e frear).
- Objeto: Um **carro específico**, como "Toyota Corolla branco".

📌 **Exemplo no código:**

```jsx
class Carro {
  constructor(marca, modelo, cor) {
    this.marca = marca; // Atributo
    this.modelo = modelo;
    this.cor = cor;
  }

  acelerar() { // Método
    console.log(`${this.marca} está acelerando! 🚗💨`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", "Branco");
meuCarro.acelerar(); // Saída: Toyota está acelerando! 🚗💨
```

---

### **🔍 Como Criar Classes no JavaScript**

### **1. Declarando uma Classe**

Use a palavra-chave `class` para declarar uma classe:

```jsx
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

### **2. Criando Objetos**

Use a palavra-chave `new` para criar uma instância (objeto) de uma classe:

```jsx
const pessoa1 = new Pessoa("João", 25);
pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 25 anos.
```

---

### **🔄 Atributos e Métodos**

- **Atributos:** São as características do objeto.
- **Métodos:** São as funções dentro da classe que representam ações.

📌 **Exemplo:**

```jsx
class Animal {
  constructor(nome, especie) {
    this.nome = nome;  // Atributo
    this.especie = especie;
  }

  fazerSom() { // Método
    console.log(`${this.nome} está fazendo um som! 🐾`);
  }
}

const cachorro = new Animal("Rex", "Cachorro");
cachorro.fazerSom(); // Saída: Rex está fazendo um som! 🐾
```

---

### **💻 Exemplos Práticos**

**Criando uma Classe para um Produto:**

```jsx
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes() {
    console.log(`${this.nome} custa R$${this.preco}.`);
  }
}

const produto1 = new Produto("Celular", 1500);
produto1.exibirDetalhes(); // Saída: Celular custa R$1500.

```

**Classe com Método para Cálculo:**

```jsx
class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

const retangulo = new Retangulo(5, 10);
console.log(`Área: ${retangulo.calcularArea()}`); // Saída: Área: 50
```

**Criando um Banco de Dados Simples:**

```jsx
class BancoDeDados {
  constructor() {
    this.dados = [];
  }

  adicionar(dado) {
    this.dados.push(dado);
    console.log("Dado adicionado!");
  }

  listar() {
    console.log(this.dados);
  }
}

const bd = new BancoDeDados();
bd.adicionar("Cliente 1");
bd.listar(); // Saída: ["Cliente 1"]
```

---

### **🎯 Exercícios Práticos**

1. Crie uma classe chamada `Livro` com atributos `titulo`, `autor` e `ano`. Adicione um método para exibir os detalhes do livro.
2. Implemente uma classe `ContaBancaria` com os métodos `depositar` e `sacar`.
3. Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".
4. Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.
5. Crie uma classe `Agenda` para armazenar e exibir contatos.

*/