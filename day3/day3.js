let verdadeiro = true;
let falso = false;
console.log(5 > 6);
console.log(5 < 6);
console.log(5 == 6);

console.log(6 >= 5);

let idade = 21;
let temCarteira = false;

if (temCarteira && idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Nao pode dirigir");
}

if (temCarteira || idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Nao pode dirigir");
}
/*
Introdução
Seja bem-vindo ao terceiro dia do desafio! 🎉 Hoje vamos falar sobre os tipos de dados booleanos, um conceito simples, mas extremamente poderoso na programação.
Os valores booleanos são como interruptores: ligado (true) ou desligado (false). Eles estão em todos os lugares, ajudando o código a tomar decisões, controlar loops, validar entradas e muito mais. Vamos entender como eles funcionam e como usá-los no JavaScript. 🚀​
📚 O Que São Valores Booleanos?
Um valor booleano só pode ter dois estados:
true: Representa verdadeiro.
false: Representa falso.
Eles são usados principalmente em condições para determinar o que o código deve fazer.
💡 Exemplo no mundo real:
Está chovendo? true
Você está logado? false
A luz está acesa? true
🔍 Comparações e Operadores Relacionais
Os valores booleanos muitas vezes são gerados a partir de comparações. Aqui estão os operadores mais comuns:
Operador
Descrição
Exemplo
Resultado
===
Igualdade estrita
5 === 5
true
!==
Diferença estrita
5 !== 3
true
<
Menor que
3 < 5
true
>
Maior que
5 > 3
true
<=
Menor ou igual
3 <= 3
true
>=
Maior ou igual
5 >= 5
true
🔄 Operadores Lógicos
Os operadores lógicos permitem combinar ou inverter valores booleanos:
Operador
Descrição
Exemplo
Resultado
&&
"E" lógico
true && false
false
||
"OU" lógico
true || false
true
!
"NÃO" lógico
!true
false
💡 Exemplo:
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir 🚗");
} else {
  console.log("Não pode dirigir ❌");
}
​
📌 Explicação:
O código verifica duas condições ao mesmo tempo: se a idade é maior ou igual a 18 e se a pessoa tem carteira.
💻 Exemplos Práticos
Verificando Login:
let estaLogado = true;

if (estaLogado) {
  console.log("Bem-vindo de volta! 👋");
} else {
  console.log("Por favor, faça login. 🔒");
}
​
Classificando Notas:
let nota = 85;

if (nota >= 90) {
  console.log("Nota A 🏆");
} else if (nota >= 70 && nota < 90) {
  console.log("Nota B 👍");
} else {
  console.log("Reprovado 😢");
}
​
Negação com !:
let luzAcesa = false;

if (!luzAcesa) {
  console.log("A luz está apagada. 💡");
}
​
Combinação de Condições:
let saldo = 100;
let temCartao = true;

if (saldo > 0 || temCartao) {
  console.log("Compra aprovada 🛒");
} else {
  console.log("Compra negada ❌");
}

​
🛠️ Dicas Importantes
Cuidado com conversões automáticas (truthy e falsy):
No JavaScript, alguns valores são interpretados como true ou false, mesmo que não sejam booleanos.
Valor
Interpretação
0, "", null, undefined, NaN
false
Qualquer outro valor
true
💡 Exemplo:
if (0) {
  console.log("Isso nunca será executado!");
}
if ("Texto") {
  console.log("Isso será executado!");
}
​
Use parênteses para clareza:
Sempre agrupe condições com && e || usando parênteses para evitar confusão.
if ((idade >= 18 && temCarteira) || temAcompanhante) {
  console.log("Pode entrar!");
}

 */