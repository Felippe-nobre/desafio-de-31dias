function array(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

let numeros = [11, 82, 63, 49, 45];
console.log(array(numeros));

