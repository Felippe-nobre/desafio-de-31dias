function verificarConexao(grafo, origem, destino) {
    const visitados = new Set();

    function buscaEmProfundidade(no) {
        if (no === destino) {
            return true;
        }

        visitados.add(no);

        for (const vizinho of grafo[no]) {
            if (!visitados.has(vizinho)) {
                if (buscaEmProfundidade(vizinho)) {
                    return true;
                }
            }
        }

        return false;
    }

    return buscaEmProfundidade(origem);
    
}
const grafo = {
    1: [2, 5],
    2: [1, 4, 5],
    3: [2, 4],
    4: [2, 3, 5, 6],
    5: [1, 4],
    6: [4]
};

console.log(verificarConexao(grafo, 1, 6)); // true
console.log(verificarConexao(grafo, 1, 3)); // true
console.log(verificarConexao(grafo, 1, 4)); // true
console.log(verificarConexao(grafo, 1, 5)); // true
console.log(verificarConexao(grafo, 1, 2)); // true
console.log(verificarConexao(grafo, 1, 7)); // false