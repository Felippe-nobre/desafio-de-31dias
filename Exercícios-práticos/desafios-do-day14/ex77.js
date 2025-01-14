function decimalParaBinario(numero) {
    const pilha = [];
    while(numero > 0){
        pilha.push(numero % 2);
        numero = Math.floor(numero / 2);
    }
    return pilha.reverse().join('');
}

console.log(decimalParaBinario(10)); // 1010