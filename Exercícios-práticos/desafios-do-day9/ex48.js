function fatorial(n) {
    if (n == 0) {
        console.log(1);
        return 1;
    }
    return n * fatorial(n - 1);

}

console.log("O fatorial de 5 é", fatorial(9));
