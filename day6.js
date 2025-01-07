let frutas = ["maçã", "banana", "laranja"];
console.log(frutas)

frutas.push("uva");
frutas.push("manga");
frutas.push("abacate");
console.log(frutas)

frutas.pop();
console.log(frutas)

frutas.shift();
console.log(frutas)

console.log(frutas[10])

for (let i = 0; i < frutas.length; i++) {
    let frutasLoop = frutas[i];

    console.log(`Minha fruta favorita é ${frutasLoop}`);
}
/*
### **Introdução**

Bem-vindo ao **sexto dia do desafio!** 🎉 Hoje vamos falar sobre **Arrays**, uma das estruturas de dados mais fundamentais na programação.

Imagine que você precisa armazenar vários valores relacionados, como os nomes dos seus amigos ou uma lista de compras. Criar uma variável para cada item seria inviável, certo? É aqui que entram os **arrays**.

Arrays permitem que você armazene vários valores em uma única variável e acesse ou manipule esses valores com facilidade. Vamos mergulhar nesse conceito e aprender como usá-lo no JavaScript! 🚀

---

### **📚 O Que é um Array?**

Um **array** é uma lista ordenada de valores que podem ser de qualquer tipo: números, strings, objetos, ou até outros arrays.

💡 **Exemplo no mundo real:**

- Uma lista de tarefas.
- Nomes de participantes em um evento.

📌 **Exemplo no código:**

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);  // Saída: ["Maçã", "Banana", "Laranja"]
```

---

### **🔍 Como Criar Arrays no JavaScript**

### **1. Arrays Simples:**

```jsx
let numeros = [1, 2, 3, 4, 5];
```

### **2. Arrays Mistos (diferentes tipos):**

```jsx
let misto = [42, "Texto", true, { chave: "valor" }];
```

### **3. Array Vazio:**

```jsx
let vazio = [];
```

📌 **Dica:** Você pode adicionar elementos ao array depois de criá-lo:

```jsx
vazio.push("Novo Elemento");
console.log(vazio);  // Saída: ["Novo Elemento"]
```

---

### **🔄 Métodos e Propriedades de Arrays**

Os arrays vêm com vários métodos úteis para facilitar sua manipulação. Aqui estão os mais importantes:

| Método | Descrição | Exemplo | Resultado |
| --- | --- | --- | --- |
| `push()` | Adiciona um elemento ao final | `frutas.push("Uva")` | `["Maçã", "Banana", "Uva"]` |
| `pop()` | Remove o último elemento | `frutas.pop()` | `["Maçã", "Banana"]` |
| `shift()` | Remove o primeiro elemento | `frutas.shift()` | `["Banana", "Laranja"]` |
| `unshift()` | Adiciona um elemento no início | `frutas.unshift("Morango")` | `["Morango", "Maçã"]` |
| `length` | Retorna o tamanho do array | `frutas.length` | `3` |
| `indexOf()` | Retorna o índice de um valor | `frutas.indexOf("Banana")` | `1` |
| `slice()` | Retorna parte do array | `frutas.slice(1, 3)` | `["Banana", "Laranja"]` |
| `splice()` | Adiciona/Remove elementos | `frutas.splice(1, 1, "Uva")` | `["Maçã", "Uva", "Laranja"]` |
| `join()` | Junta os elementos em uma string | `frutas.join(", ")` | `"Maçã, Banana, Laranja"` |

---

### **💻 Exemplos Práticos**

**Adicionar e Remover Elementos:**

```jsx
let lista = ["Caderno", "Caneta", "Borracha"];
lista.push("Lápis");  // Adiciona no final
lista.shift();  // Remove o primeiro elemento
console.log(lista);  // Saída: ["Caneta", "Borracha", "Lápis"]
```

**Iterar Sobre um Array:**

```jsx
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
// Saída:
// 1
// 2
// 3
// 4
// 5
```

**Encontrar um Elemento:**

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];
let indice = frutas.indexOf("Banana");
console.log(indice);  // Saída: 1
```

**Copiar Parte de um Array:**

```jsx
let numeros = [10, 20, 30, 40, 50];
let subArray = numeros.slice(1, 4);
console.log(subArray);  // Saída: [20, 30, 40]
```

**Manipular Arrays com `splice`:**

```jsx
let lista = ["A", "B", "C"];
lista.splice(1, 1, "X", "Y");
console.log(lista);  // Saída: ["A", "X", "Y", "C"]
```

---

### **🛠️ Dicas Importantes**

- **Acessar o Último Elemento:**
Use `array[array.length - 1]` para acessar o último elemento de um array.

```jsx
let numeros = [5, 10, 15];
console.log(numeros[numeros.length - 1]);  // Saída: 15
```

- **Cuidado com Índices Inválidos:**
Acessar um índice que não existe retorna `undefined`:

```jsx
let frutas = ["Maçã", "Banana"];
console.log(frutas[5]);  // Saída: undefined
```
*/