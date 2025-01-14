function reverseString(str) {
    const pilha = [];
    for (let char of str) {
        pilha.push(char);
    }
    let resultado = '';
    while (pilha.length > 0) {
        resultado += pilha.pop();
    }
    return resultado;
}

console.log(reverseString('Felippe')); // olleh