const cache = {};
function buscarDados(chave) {
    if (cache[chave]) {
        console.log("Carregado do cache:", cache[chave]);
        return cache[chave];
    }
    console.log("Processando dados...");
    const dados = `Dados para ${chave}`;
    cache[chave] = dados;
    return dados;
}
console.log(buscarDados("usuario1"));