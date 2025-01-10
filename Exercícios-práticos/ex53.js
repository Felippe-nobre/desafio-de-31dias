class livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }    
    ler(){
        console.log(`Estou lendo ${this.titulo} escrito por ${this.autor} em ${this.ano}`);
    }
}

let livro1 = new livro("O Senhor dos Aneis", "J. R. R. Tolkien", 1954);
livro1.ler();
let livro2 = new livro("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 1997);
livro2.ler();