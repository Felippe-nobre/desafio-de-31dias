class Documento {
    exibirConteudo() {
        console.log("Conteúdo genérico do documento.");
    }
}

class PDF extends Documento {
    exibirConteudo() {
        console.log("Exibindo conteúdo de um arquivo PDF.");
    }
}

class Word extends Documento {
    exibirConteudo() {
        console.log("Exibindo conteúdo de um arquivo Word.");
    }
}

// Teste
const documentos = [new PDF(), new Word()];
documentos.forEach(documento => documento.exibirConteudo());
