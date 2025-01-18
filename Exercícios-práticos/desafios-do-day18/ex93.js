function apiFalsa(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const produtos = [
                { id: 1, name: "Notebook", price: 2500 },
                { id: 2, name: "Smartphone", price: 1500 },
                { id: 3, name: "Tablet", price: 1200 },
                
            ]
            resolve(produtos)
        }, 1500)
    })
}

async function fetchProdutos() {
    console.log("Carregando produtos...");
    const Produtos = await apiFalsa();
    console.log("Produtos carregados:", Produtos);
    
    
}

fetchProdutos();
