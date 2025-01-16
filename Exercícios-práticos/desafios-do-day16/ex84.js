class CEO{
    constructor(valor){
        this.valor = valor;
        this.subordinados = [];
    }
    adiconarSubordinado(subordinado){
        this.subordinados.push(subordinado);
    }
}
const raiz = new CEO('Felippe');

const diretor = new CEO('Lucas');
const gerente = new CEO('Ana');
const analista = new CEO('João');

raiz.adiconarSubordinado(diretor);
raiz.adiconarSubordinado(gerente);
gerente.adiconarSubordinado(analista);

function hearquiaDaEmpresa(CEO){
    const fila = [CEO];
    while(fila.length > 0){
        const CEO = fila.shift();
        console.log(CEO.valor);
        CEO.subordinados.forEach(subordinado => fila.push(subordinado));
    }
}

hearquiaDaEmpresa(raiz);
