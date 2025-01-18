//!Aula 1- variaveis
// ? oque sao variaveis
let nome = "Felippe";
let cidade = "São Paulo"

console.log("Olá, meu nome é ",nome, "e eu moro em", cidade);

//? tipos de variaveis
//! string
let estado = "SP";

//! number
let idade = 21;

//! boolean
let maiorDeIdade = true;

//!array
let lista = [true, false, true];

//!object
let pessoa = {
    nome: "Felippe",
    cidade: "São Paulo",
    idade: 21
}
console.log(pessoa.idade);
/*
### **Introdução**

Bem-vindo ao **primeiro dia do desafio!** 🎉 

Primeiramente, gostaria de te dar os parabéns por dar esse passo rumo ao seu desenvolvimento pessoal e profissional, e realmente espero que esse desafio agregue muito na sua vida.

Serão 31 dias aprendendo programação, totalmente de graça, cada dia um conceito novo, explicando de um jeito fácil de entender e com vários exercícios práticos para você praticar, pois afinal, a programação é uma habilidade que só aprender fazendo.

Sem mais enrolação, bora pro código!

---

### **📚 O Que é uma Variável?**

Hoje vamos falar sobre **variáveis**, a base de qualquer programa em qualquer linguagem de programação. Se você já ouviu alguém dizer que uma variável é "como uma caixa onde você guarda coisas", você já está no caminho certo!

As variáveis são essenciais porque permitem que armazenemos dados que podemos usar e modificar ao longo do programa. E aqui no **JavaScript**, elas são muito flexíveis! Vamos mergulhar nesse conceito? 🚀

Uma variável é um espaço na memória do computador onde você pode **armazenar informações**. Essa informação pode ser:

- Um número 🧮
- Uma palavra ou frase 📜
- Uma lista 📋
- Ou até mesmo algo mais complexo, como objetos e funções!

---

### **🛠️ Como Declarar Variáveis no JavaScript?**

No JavaScript, usamos as palavras-chave `var`, `let`, ou `const` para declarar uma variável. Aqui está como elas funcionam:

```jsx
// Declarando uma variável com let
let nome = "João"; // Você pode mudar o valor depois

// Declarando uma variável com const
const idade = 25; // O valor não pode ser alterado

// Declarando uma variável com var (não recomendado, mas funciona)
var cidade = "São Paulo";
```

---

### **🔍 Tipos de Dados em Variáveis**

No JavaScript, as variáveis podem armazenar diferentes tipos de dados. Vamos ver os principais:

**Número** (`number`):

```jsx
let idade = 30;
```

**Texto** (`string`):

```jsx
let nome = "Maria";
```

**Booleano** (`boolean`):

```jsx
let estaLogado = true; // ou false
```

**Lista (Array)**:

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
```

**Objeto**:

```jsx
let pessoa = {
  nome: "Carlos",
  idade: 28
};
```

---

### **💡 Exemplos Práticos**

Vamos criar algumas variáveis e usar em diferentes situações:

**Cálculos Simples**:

```jsx
let preco = 50;
let desconto = 10;
let precoFinal = preco - desconto;

console.log(precoFinal); // Saída: 40
```

**Juntando Texto**:

```jsx
let saudacao = "Olá";
let nome = "Ana";

console.log(saudacao + ", " + nome + "!"); // Saída: Olá, Ana!
```

**Acessando Dados em Arrays**:

```jsx
let cores = ["Azul", "Vermelho", "Verde"];

console.log(cores[1]); // Saída: Vermelho
```

---

### **🔎 Diferenças Entre `var`, `let` e `const`**

No JavaScript, você pode declarar variáveis usando `var`, `let`, ou `const`. Apesar de parecerem semelhantes, elas têm comportamentos diferentes, principalmente em relação ao **escopo** e à possibilidade de alterar seus valores.

**1. `var`: O "Velho" JavaScript**

- Declarada antes do ES6, `var` foi a única maneira de criar variáveis por muito tempo.
- **Escopo:** Global ou local dentro de funções. Ignora blocos (`if`, `for`, etc.).
- **Reatribuição:** Pode ser reatribuída e redeclarada no mesmo escopo.

```jsx
if (true) {
  var nome = "Pedro";
}
console.log(nome); // Funciona, mesmo fora do bloco
```

⚠️ **Problemas com `var`:**

- Como ignora blocos, pode causar comportamentos inesperados, especialmente em loops.

**2. `let`: O "Atualizado"**

- Introduzido no ES6, é recomendado para variáveis cujo valor pode mudar.
- **Escopo:** Local ao bloco onde foi declarada.
- **Reatribuição:** Pode ser reatribuída, mas não redeclarada no mesmo escopo.

```jsx
if (true) {
  let idade = 25;
  console.log(idade); // Funciona aqui
}
console.log(idade); // Erro: idade não está definida
```

**3. `const`: O "Imutável"**

- Também introduzido no ES6, é usado para variáveis que **não mudam de valor**.
- **Escopo:** Local ao bloco onde foi declarada.
- **Reatribuição:** Não pode ser reatribuída, mas se for um objeto ou array, seus valores internos podem ser alterados.

```jsx
const PI = 3.14;
PI = 3.15; // Erro: Não pode reatribuir
```

Para objetos e arrays:

```jsx
const frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); // Funciona
console.log(frutas); // ["Maçã", "Banana", "Laranja"]
```

### **💡 Quando Usar Cada Um?**

- **`let`:** Quando você precisa de uma variável cujo valor será alterado.
- **`const`:** Para valores constantes ou estruturas que não serão reatribuídas.
- **`var`:** Evite, a menos que precise de compatibilidade com códigos antigos.

---

### **🔗 Dicas Importantes**

- Sempre escolha nomes de variáveis que sejam claros e descritivos.
    
    ```jsx
    let x = 10; // Ruim ❌
    let precoProduto = 10; // Bom ✅
    ```
    
- **Cuidado com letras maiúsculas e minúsculas!** O JavaScript diferencia `preco` de `Preco`.
*/