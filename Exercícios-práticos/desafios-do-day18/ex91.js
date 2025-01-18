function carregamentoDeDados() {
    return new Promise((resolve) => {
        return new Promise((resolve) => {
            console.log('Dados carregando...');
            setTimeout(() => {
                console.log('Dados carregados com sucesso!');
                resolve()
            }, 3000)
            
        })
    })
}

carregamentoDeDados()
.then(() => resolve)