function buscaEmProfundidade(rotas, inicio){
    const visitados = new Set();
    const fila = [inicio];

    while(fila.length > 0){
        const no = fila.shift();
        if(!visitados.has(no)){
            console.log(no);
            visitados.add(no);
            fila.push(...rotas[no]);
        }
    }
}





const rotas = {
    SP: ["RJ", "MG"],
    RJ: ["SP", "ES"],
    MG: ["SP", "ES"],
    ES: ["RJ", "MG"]
};
  
buscaEmProfundidade(rotas, "SP");
  
  
 