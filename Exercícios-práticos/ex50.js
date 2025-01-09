function palindromo(palavra) {
    palavra = palavra.replace(/\s+/g, '').toLowerCase();

    if (palavra.length <= 1) {
        return true;
    }

    if (palavra[0] !== palavra[palavra.length - 1]) {
        return false;
    }
    return palindromo(palavra.slice(1, palavra.length - 1));
}

console.log(palindromo("arara"));
console.log(palindromo("ana"));
console.log(palindromo("casa"));
console.log(palindromo("carro"));