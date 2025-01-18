function tarefas(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tarefas carregando...');
            resolve()
        },1000)  
    })
}

function executarTarefas1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Primeira tarefa estudar, está sendo executada...');
            resolve()
        },2000)  
    })
}

function executarTarefas2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Segunda tarefa ler, está sendo executada...');
            resolve()
        },3000)  
    })
}
function finalizandotarefas(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tarefas estudae e ler foram finalizadas!');
            resolve()
        },4000)  
    })
}
async function tarefasEncerradas(){
    const finalizado = await Promise.resolve([tarefas(), executarTarefas1(), executarTarefas2(), finalizandotarefas()] );
}

tarefasEncerradas()