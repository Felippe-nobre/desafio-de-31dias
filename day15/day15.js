class Fila{
    constructor(){
        this.items = [];
    }
    enqueue(valor){
        this.items.push(valor);
    }
    dequeue(){
        if(this.estaVazia()){
            throw new Error('A fila está vazia')
        }
        return this.items.shift();
    }
    estaVazia(){
        return this.items.length === 0
    }

    front(){
       return this.items[0];
    }
}

const fila = new Fila();
fila.enqueue("Felippe")
fila.enqueue("Mariana")
fila.enqueue("Maria")
fila.enqueue("João")

console.log(fila.front());

fila.dequeue();
console.log(fila.front());

/*
### **Introdução**

Bem-vindo ao **décimo quinto dia do desafio!** 🎉 Hoje vamos explorar outra estrutura de dados fundamental: **Filas (Queues)**.

Uma fila é uma **estrutura de dados linear** que segue o princípio **FIFO (First In, First Out)**: o primeiro elemento que entra é o primeiro a sair, como uma fila de pessoas no supermercado.

Vamos entender como as filas funcionam, aprender a implementá-las no JavaScript e ver exemplos práticos para aplicações no mundo real. 🚀

---

### **📚 O Que é uma Fila?**

Uma **fila** é como uma linha de pessoas esperando atendimento:

- A pessoa que chega primeiro é atendida primeiro.
- Novas pessoas entram no **final** da fila.

💡 **Exemplo no mundo real:**

- **Fila de impressão:** O primeiro documento enviado é o primeiro a ser impresso.
- **Atendimento bancário:** Os clientes são atendidos na ordem de chegada.

📌 **Estrutura Básica:**

| Operação | Descrição |
| --- | --- |
| `enqueue` | Adiciona um elemento ao final da fila |
| `dequeue` | Remove o elemento da frente da fila |
| `front` | Retorna o elemento na frente da fila |
| `isEmpty` | Verifica se a fila está vazia |

---

### **🔍 Implementando Filas no JavaScript**

**Usando um Array Simples:**
O array já oferece métodos como `push` e `shift` que podem ser usados para implementar uma fila:

```jsx
class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(elemento) {
    this.itens.push(elemento); // Adiciona ao final
  }

  dequeue() {
    if (this.isEmpty()) {
      return "A fila está vazia!";
    }
    return this.itens.shift(); // Remove do início
  }

  front() {
    return this.isEmpty() ? "A fila está vazia!" : this.itens[0];
  }

  isEmpty() {
    return this.itens.length === 0;
  }
}

const fila = new Fila();
fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
console.log(fila.front());  // Saída: Cliente 1
fila.dequeue();
console.log(fila.front());  // Saída: Cliente 2
```

---

### **🔄 Aplicações Práticas de Filas**

**Simulando um Atendimento:**
Filas são usadas para gerenciar o atendimento de clientes:

```jsx
class Atendimento {
  constructor() {
    this.clientes = [];
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
    console.log(`Cliente ${cliente} entrou na fila.`);
  }

  atenderCliente() {
    if (this.clientes.length === 0) {
      console.log("Nenhum cliente na fila.");
      return;
    }
    const clienteAtendido = this.clientes.shift();
    console.log(`Atendendo cliente ${clienteAtendido}.`);
  }
}

const atendimento = new Atendimento();
atendimento.adicionarCliente("João");
atendimento.adicionarCliente("Ana");
atendimento.atenderCliente(); // Saída: Atendendo cliente João.
atendimento.atenderCliente(); // Saída: Atendendo cliente Ana.
```

**Gerenciando Impressões:**
Simule uma fila de impressão onde os documentos são impressos na ordem de chegada:

```jsx
class Impressora {
  constructor() {
    this.documentos = [];
  }

  adicionarDocumento(documento) {
    this.documentos.push(documento);
    console.log(`Documento "${documento}" adicionado à fila.`);
  }

  imprimirDocumento() {
    if (this.documentos.length === 0) {
      console.log("Nenhum documento na fila.");
      return;
    }
    const documento = this.documentos.shift();
    console.log(`Imprimindo documento: ${documento}`);
  }
}

const impressora = new Impressora();
impressora.adicionarDocumento("Relatório.pdf");
impressora.adicionarDocumento("Planilha.xlsx");
impressora.imprimirDocumento(); // Saída: Imprimindo documento: Relatório.pdf
impressora.imprimirDocumento(); // Saída: Imprimindo documento: Planilha.xlsx
```

**Simulando uma Fila de Banco:**

```jsx
class Banco {
  constructor() {
    this.fila = [];
  }

  entrarNaFila(cliente) {
    this.fila.push(cliente);
    console.log(`${cliente} entrou na fila do banco.`);
  }

  atenderCliente() {
    if (this.fila.length === 0) {
      console.log("Nenhum cliente na fila.");
      return;
    }
    const cliente = this.fila.shift();
    console.log(`Atendendo ${cliente}.`);
  }
}

const banco = new Banco();
banco.entrarNaFila("Carlos");
banco.entrarNaFila("Maria");
banco.atenderCliente(); // Saída: Atendendo Carlos.
banco.atenderCliente(); // Saída: Atendendo Maria.
```

---

### **🛠️ Dicas Importantes**

- **Filas são Ideais para Processos Sequenciais:**
    
    Use filas para situações em que as tarefas precisam ser concluídas na ordem em que foram recebidas.
    
- **Evite Operações Ineficientes:**
    
    Usar `shift` em arrays pode ser lento para filas muito grandes. Considere usar bibliotecas especializadas para filas maiores.
    
- **Filas em Sistemas Reais:**
    
    Muitas filas em sistemas reais são implementadas usando estruturas mais complexas, como filas circulares.

*/