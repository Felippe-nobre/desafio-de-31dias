/*console.log('Inicio')
function rodarDepoisDe2Segundos(callback){
    setTimeout(() => {
        callback('Isso aqui acabou de executar')
    }, 2000);
}

rodarDepoisDe2Segundos((mensagem) =>{
    console.log(mensagem)
})

console.log('Fim')

function preparIngredientes(){
    return new Promise((resolve) => {
        console.log('Preparando ingredientes');
        setTimeout(() => {
        console.log('Ingredientes preparados');
        resolve()
        },2000)
    })
    
}

function cozinhar(){
    return new Promise((resolve) => {
        console.log('Cozinhando...');
        setTimeout(() => {
        console.log('Prato pronto.');
        resolve()
        }, 3000)
    })
    
}

function servir(){
    return new Promise((resolve) => {
        console.log("servindo Prato ...");

        setTimeout(() => {
        console.log("Prato servido");
        resolve()
        }, 4000)
    })
    
}

preparIngredientes()
    .then(() => cozinhar())
    .then(() => servir())
    .then(() => {
        console.log('Fim da cozinha');
    })

const promise = new Promise((resolve, reject) => {
    let deuCerto = false;

    if(deuCerto){
        resolve("Deu certo");
    }else{
        reject('Deu errado');
    }
})

promise
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((resultado) => {
        console.log(resultado);
    })

const espear = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 2000)
})

espear.then(() => {
    console.log('Executou depois de 2 segundos');
    
})

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((resposta) => {
        if(resposta.ok){
            return resposta.json();
            
        }else{
            throw new Error('Nao foi possivel obter os dados');
        }
    })
    .then((respostaEmJson) => {
        console.log(respostaEmJson);
    })
    .catch((erro) => {
        console.log(erro);
    })*/

async function minhaFuncaoAssincrona(){
    return "Olá eu sou uma função assíncrona";
}

const resultado = minhaFuncaoAssincrona()
    .then((resultado) => {
        console.log(resultado);
    })

async function buscarDados(){
    const resultado = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (resultado.ok){
        const json = await resultado.json();
        console.log(json);
         json
    }else{
        throw new Error('Nao foi possivel obter os dados');
    }
}

buscarDados()