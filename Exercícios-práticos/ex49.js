function arry(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        
    }
    return soma
}

let numeros = [3, 8, 12, 5, 10];
console.log(arry(numeros));