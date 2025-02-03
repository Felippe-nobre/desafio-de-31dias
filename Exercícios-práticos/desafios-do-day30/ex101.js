const cache = {};
const TEMPO_EXPIRACAO = 15000;

function buscarDadosComExpiracao(chave) {
    const agora = Date.now();

    if(cache[chave] && agora - cache[chave].timestamp < TEMPO_EXPIRACAO) {
        console.log("Carregado do cache:", cache[chave].valor);
        return cache[chave].valor;
    }

    console.log("Processando dados...");
    const dados = `Dados para ${chave}`;
    cache[chave] = { valor: dados, timestamp: agora };
    return dados;
}

console.log(buscarDadosComExpiracao("usuario2"));

