let hora = 10;
if (hora < 12){
    console.log("Bom dia");
}else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

let diaDaSemana = 2;
switch (diaDaSemana) {
    case 1 :
        console.log("segunda-feira");
        break;

    case 2 :
        console.log("terça-feira");
        break; 

    case 3 :
        console.log("quarta-feira");
        break;

    case 4 :
        console.log("quinta-feira");
        break;

    case 5 :
        console.log("sexta-feira");
        break;

    case 6 :
        console.log("sabado");
        break;

    case 7 :
        console.log("domingo");
        break;

    default:
        console.log("dia inválido");
        break;
}
/* 
### **Introdução**

Seja bem-vindo ao **segundo dia do desafio!** 🎉 Hoje vamos explorar as **Estruturas Condicionais**, que são a forma de fazer o código tomar decisões com base em condições.

Pense assim: na vida, estamos sempre avaliando condições para agir. Por exemplo:

- **Se** está chovendo, **então** levo um guarda-chuva.
- **Caso contrário**, saio sem ele.

Na programação, é exatamente assim! Vamos aprender a usar o famoso `if`, o útil `else`, e o versátil `switch`. Vamos lá? 🚀

---

### **📚 O Que são Estruturas Condicionais?**

As estruturas condicionais permitem que o código **execute diferentes blocos de instruções** dependendo de condições específicas.

No JavaScript, as principais formas de tomar decisões são:

1. **`if` e `else`:** Executa um bloco de código se uma condição for verdadeira, e outro bloco caso contrário.
2. **`else if`:** Permite testar várias condições.
3. **`switch`:** Ideal para quando você precisa verificar muitas possibilidades de forma mais limpa.

---

### **🔍 `if`, `else if`, e `else`**

Vamos começar com a estrutura mais básica:

```jsx
let hora = 10;

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}
```

📌 **Explicação:**

1. Se `hora` for menor que 12, imprime "Bom dia!".
2. Caso contrário, se `hora` for menor que 18, imprime "Boa tarde!".
3. Se nenhuma das condições acima for verdadeira, imprime "Boa noite!".

---

### **🔄 `switch`**

O `switch` é útil quando você precisa testar **vários casos diferentes** para uma mesma variável.

```jsx
let diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Outro dia");
}
```

📌 **Explicação:**

- Cada `case` é uma condição que verifica o valor da variável `diaSemana`.
- O `default` é executado se nenhum dos casos for verdadeiro.
- O `break` impede que o código continue executando outros casos.

---

### **⚡ Operador Ternário**

Se você precisa fazer uma decisão simples, o operador ternário é perfeito. Ele é como um `if` resumido:

```jsx
let idade = 18;
let mensagem = idade >= 18 ? "Pode entrar! 🎉" : "Entrada proibida! ❌";

console.log(mensagem);
```

📌 **Explicação:**

- Se a condição `idade >= 18` for verdadeira, retorna "Pode entrar!".
- Caso contrário, retorna "Entrada proibida!".

---

### **💻 Exemplos Práticos**

- **Verificando Par ou Ímpar:**

```jsx
let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}

```

- **Classificando Notas:**

```jsx
let nota = 85;

if (nota >= 90) {
  console.log("Aprovado com A! 🏆");
} else if (nota >= 70) {
  console.log("Aprovado com B.");
} else {
  console.log("Reprovado. 😔");
}

```

- **Escolhendo uma Ação com `switch`:**

```jsx
let opcao = "pagar";

switch (opcao) {
  case "pagar":
    console.log("Processando pagamento...");
    break;
  case "cancelar":
    console.log("Cancelando pedido...");
    break;
  default:
    console.log("Opção inválida!");
}
```

---

### **🛠️ Dicas Importantes**

- **Coloque condições mais específicas primeiro:**
    
    ```jsx
    if (nota >= 90) {
      // Específico
    } else if (nota >= 50) {
      // Geral
    }
    ```
    
- **Use `switch` para evitar muitos `else if`:**
    
    Quando há muitas opções baseadas em um único valor, o `switch` torna o código mais legível.
    
- **Evite duplicar código:**
    
    Tente organizar as condições de forma a evitar repetições desnecessárias.
*/