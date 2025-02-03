class ApiCache {
    constructor(ttl = 60000) { // TTL padrão: 60 segundos
      this.cache = new Map();
      this.ttl = ttl;
    }
  
    async fetchData(url) {
      const now = Date.now();
  
      // Se a resposta estiver no cache e ainda for válida, retorna do cache
      if (this.cache.has(url)) {
        const { data, expiry } = this.cache.get(url);
        if (now < expiry) {
          console.log("Retornando do cache:", url);
          return data;
        } else {
          this.cache.delete(url); // Remove cache expirado
        }
      }
  
      // Faz a requisição para a API fictícia
      console.log("Fazendo requisição para:", url);
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        // Armazena a resposta no cache com tempo de expiração
        this.cache.set(url, { data, expiry: now + this.ttl });
        return data;
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
      }
    }
  }
  
  // Exemplo de uso:
  const apiCache = new ApiCache(30000); // TTL de 30 segundos
  
  async function test() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
  
    // Primeira chamada (busca da API)
    const data1 = await apiCache.fetchData(url);
    console.log("Dados recebidos:", data1);
  
    // Segunda chamada (retorna do cache)
    const data2 = await apiCache.fetchData(url);
    console.log("Dados recebidos novamente:", data2);
  
    // Aguarda o cache expirar e faz nova requisição
    setTimeout(async () => {
      const data3 = await apiCache.fetchData(url);
      console.log("Dados após expiração do cache:", data3);
    }, 31000);
  }
  
  test();
  