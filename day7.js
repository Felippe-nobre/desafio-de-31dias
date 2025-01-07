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


