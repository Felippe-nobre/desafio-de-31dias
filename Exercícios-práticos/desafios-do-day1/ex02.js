let preco = 560.50;
let desconto = 0.4;
let precoFinal = preco - (preco * desconto);


console.log("Preço original: R$", preco.toFixed(2));
console.log("Desconto: ", (desconto * 100) + "%");
console.log("Preço com desconto: R$", precoFinal.toFixed(2));
