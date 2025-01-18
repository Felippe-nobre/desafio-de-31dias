class Pilha{
    constructor(){
        this.items = [];
    }
    push(valor){
        this.items.push(valor);
    }
    estavazia(){
        return this.items.length === 0;
    }
    pop(){
        if(this.estavazia()){
            throw new Error("Pilha está vazia");
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
}

const pilha = new Pilha();
pilha.push(2);
pilha.push(1);
pilha.push(3);

console.log(pilha.peek());

pilha.pop();

console.log(pilha.peek());

/* 
### **Introdução**

Bem-vindo ao **décimo quarto dia do desafio!** 🎉 Hoje vamos aprender sobre uma estrutura de dados essencial: **Pilhas (Stacks)**.

Uma pilha é uma **estrutura de dados linear** que segue o princípio **LIFO (Last In, First Out)**: o último elemento adicionado é o primeiro a ser removido, como uma pilha de pratos em um restaurante.

Vamos entender como as pilhas funcionam, aprender a implementá-las no JavaScript e ver aplicações práticas no mundo real. 🚀

---

### **📚 O Que é uma Pilha?**

Uma **pilha** é como uma torre de pratos:

- Você só pode adicionar ou remover pratos do **topo** da pilha.
- O prato que foi colocado por último será o primeiro a ser removido.

💡 **Exemplo no mundo real:**

- **Botões de "Desfazer" e "Refazer" em editores de texto.**
- **Histórico de navegação em um navegador.**

📌 **Estrutura Básica:**

| Operação | Descrição |
| --- | --- |
| `push` | Adiciona um elemento ao topo da pilha |
| `pop` | Remove o elemento do topo da pilha |
| `peek` | Retorna o elemento no topo da pilha |
| `isEmpty` | Verifica se a pilha está vazia |

---

### **🔍 Implementando Pilhas no JavaScript**

**Usando um Array Simples:**
O array já oferece métodos como `push` e `pop`, que tornam fácil criar uma pilha:

```jsx
class Pilha {
  constructor() {
    this.itens = [];
  }

  push(elemento) {
    this.itens.push(elemento);
  }

  pop() {
    if (this.isEmpty()) {
      return "A pilha está vazia!";
    }
    return this.itens.pop();
  }

  peek() {
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length === 0;
  }
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
console.log(pilha.peek());  // Saída: 2
pilha.pop();
console.log(pilha.peek());  // Saída: 1
```

---

### **🔄 Aplicações Práticas de Pilhas**

**Histórico de Navegação:**
O navegador usa uma pilha para armazenar páginas visitadas. Quando você clica no botão "Voltar", ele remove a página atual da pilha.

```jsx
class Historico {
  constructor() {
    this.paginas = [];
  }

  visitarPagina(pagina) {
    this.paginas.push(pagina);
    console.log(`Visitou: ${pagina}`);
  }

  voltar() {
    if (this.paginas.length === 0) {
      console.log("Nenhuma página para voltar.");
      return;
    }
    const ultimaPagina = this.paginas.pop();
    console.log(`Voltou da página: ${ultimaPagina}`);
  }
}

const historico = new Historico();
historico.visitarPagina("google.com");
historico.visitarPagina("youtube.com");
historico.voltar(); // Saída: Voltou da página: youtube.com
```

**Checar Parênteses Balanceados:**
Pilhas são úteis para verificar se os parênteses em uma expressão estão balanceados:

```jsx
function checarParenteses(expressao) {
  const pilha = [];
  for (let char of expressao) {
    if (char === "(") {
      pilha.push(char);
    } else if (char === ")") {
      if (pilha.length === 0) {
        return false;
      }
      pilha.pop();
    }
  }
  return pilha.length === 0;
}

console.log(checarParenteses("(a + b) * (c + d)")); // Saída: true
console.log(checarParenteses("(a + b * (c + d)"));  // Saída: false
```

**Reverter uma String:**
Você pode usar uma pilha para inverter uma string:

```jsx
function reverterString(str) {
  const pilha = [];
  for (let char of str) {
    pilha.push(char);
  }
  let resultado = "";
  while (pilha.length > 0) {
    resultado += pilha.pop();
  }
  return resultado;
}

console.log(reverterString("pilha")); // Saída: ahlip
```

---

### **💻 Exemplos Práticos**

**Simulando um Desfazer:**

```jsx
class Editor {
  constructor() {
    this.acoes = [];
  }

  realizarAcao(acao) {
    this.acoes.push(acao);
    console.log(`Ação realizada: ${acao}`);
  }

  desfazer() {
    if (this.acoes.length === 0) {
      console.log("Nada para desfazer.");
      return;
    }
    const ultimaAcao = this.acoes.pop();
    console.log(`Ação desfeita: ${ultimaAcao}`);
  }
}

const editor = new Editor();
editor.realizarAcao("Escreveu 'Olá'");
editor.realizarAcao("Apagou uma palavra");
editor.desfazer(); // Saída: Ação desfeita: Apagou uma palavra
```

**Converter Decimal para Binário:**

```jsx
function decimalParaBinario(numero) {
  const pilha = [];
  while (numero > 0) {
    pilha.push(numero % 2);
    numero = Math.floor(numero / 2);
  }
  return pilha.reverse().join("");
}

console.log(decimalParaBinario(10)); // Saída: 1010
```

---

### **🛠️ Dicas Importantes**

- **Evite Underflow:**
    
    Sempre verifique se a pilha está vazia antes de tentar remover um elemento.
    
- **Use Pilhas para Resolver Problemas Recursivos:**
    
    Alguns problemas que parecem recursivos podem ser resolvidos usando pilhas de forma iterativa.
    
- **Mantenha as Operações Simples:**
    
    Concentre-se em usar as operações `push` e `pop` para manter a pilha organizada.
*/