async function temporizador(segundos) {
    console.log(`Aguardando ${segundos} segundos...`);
    await new Promise(resolve => 
    setTimeout(resolve, segundos * 1000));
    console.log(`Temporizador finalizado!`);
    
}

temporizador(3);