function boaTarde (nome){
    console.log(`Boa tarde, ${nome}`);
}
function calculadora(a, b, operacao){
    switch(operacao){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Divisão por zero";

                
            } else {
                return a / b;
            }
       default:
        return "Operação inválida";
        }
}

let resultado = calculadora(10, 5, "*");
console.log(resultado);

/*### **📌 Introdução**

Bem-vindo ao **sétimo dia do desafio!** 🎉 Hoje vamos falar sobre **funções**, o coração de qualquer programa bem estruturado.

Uma função é como uma **receita de bolo**: você define os ingredientes (entradas), segue os passos (código dentro da função) e obtém o bolo pronto (resultado).

Elas ajudam a organizar o código, evitar repetições e facilitar a reutilização. Vamos explorar os diferentes tipos de funções no JavaScript, entender como elas funcionam e criar exemplos práticos. 🚀

---

### **📚 O Que é uma Função?**

Uma **função** é um bloco de código que realiza uma tarefa específica. Você pode pensar nela como um **mini-programa** dentro do seu programa principal.

💡 **Exemplo no mundo real:**

- Uma função para calcular a soma de dois números.
- Uma função para validar um email.

📌 **Exemplo no código:**

```jsx
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Ana"));  // Saída: Olá, Ana!
```

---

### **🔍 Como Criar Funções no JavaScript**

### **1. Declaração de Função (Function Declaration):**

```jsx
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3));  // Saída: 5
```

### **2. Expressão de Função (Function Expression):**

```jsx
const multiplicar = function(a, b) {
  return a * b;
};

console.log(multiplicar(4, 5));  // Saída: 20
```

### **3. Arrow Function (ES6):**

```jsx
const dividir = (a, b) => a / b;

console.log(dividir(10, 2));  // Saída: 5
```

📌 **Dica:** Use arrow functions para simplificar código curto e direto.

---

### **🔄 Parâmetros e Retornos**

**Funções com Parâmetros:**
Parâmetros são como "ingredientes" que a função precisa para funcionar.

```jsx
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar("João"));  // Saída: Olá, João!
```

**Funções Sem Retorno:**
Nem todas as funções precisam retornar um valor.

```jsx
function exibirMensagem(mensagem) {
  console.log(mensagem);
}

exibirMensagem("Bem-vindo ao curso!");  // Saída: Bem-vindo ao curso!
```

**Funções com Valor Padrão:**
Você pode definir valores padrão para os parâmetros.

```jsx
function somar(a = 0, b = 0) {
  return a + b;
}

console.log(somar(5));  // Saída: 5 (b = 0 por padrão)
```

---

### **🔄 Funções de Alta Ordem**

Funções de alta ordem são aquelas que recebem outras funções como argumentos ou retornam funções.

💡 **Exemplo:**

```jsx
function calcular(a, b, operacao) {
  return operacao(a, b);
}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(calcular(5, 3, somar));       // Saída: 8
console.log(calcular(5, 3, multiplicar)); // Saída: 15
```

---

### **💻 Exemplos Práticos**

**Calculadora Básica:**

```jsx
function calcular(a, b, operacao) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operação inválida";
  }
}

console.log(calcular(10, 5, "+"));  // Saída: 15
```

**Verificar Par ou Ímpar:**

```jsx
function parOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(parOuImpar(7));  // Saída: Ímpar
```

**Converter Temperatura:**

```jsx
function celsiusParaFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

console.log(celsiusParaFahrenheit(25));  // Saída: 77
```

**Calcular Fatorial:**

```jsx
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5));  // Saída: 120
```

**Filtrar Números Positivos em um Array:**

```jsx
function filtrarPositivos(array) {
  return array.filter(numero => numero > 0);
}

console.log(filtrarPositivos([-3, 5, -1, 8]));  // Saída: [5, 8]
```

---

### **🛠️ Dicas Importantes**

- **Evite Repetição de Código:**
    
    Sempre que perceber que está repetindo código, considere criar uma função.
    
- **Nomeie Funções de Forma Clara:**
    
    O nome da função deve indicar claramente o que ela faz.
    
    ```jsx
    function calcularMedia() {} // Claro
    function calc() {} // Pouco claro
    
    ```
    
- **Use Funções para Modularizar o Código:**
    
    Divida tarefas complexas em várias funções menores e reutilizáveis. */

