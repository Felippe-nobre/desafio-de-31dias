const produto = {
    nome: "Celular",
    preco: 1500,
    disponivel: true
  };
  
  const json = JSON.stringify(produto);
  console.log("JSON String:",json);
  
  const produtoConvertido = JSON.parse(json);
  console.log("Produto convertido:", produtoConvertido);