class No{
    constructor(valor){
        this.valor = valor;
        this.filhos = [];
    }
    adiconarFilho(no){
        this.filhos.push(no);
    }
    contagemDeNos(){
        let contagem = 1;
        this.filhos.forEach(filho => contagem += filho.contagemDeNos());
        return contagem;
    }
}

const raiz = new No(20);

const no12 = new No(12);
const no32 = new No(32);

raiz.adiconarFilho(no12);
raiz.adiconarFilho(no32);

const no15 = new No(15);
const no17 = new No(17);

no12.adiconarFilho(no15);
no32.adiconarFilho(no17);


function buscaDeNoEspecifico(raiz, valor){
    if(raiz.valor === valor){
        return raiz;
    }else{
        for(let i = 0; i < raiz.filhos.length; i++){
            const no = buscaDeNoEspecifico(raiz.filhos[i], valor);
            if(no){
                return no;
            }
        }
    }
}

console.log(buscaDeNoEspecifico(raiz, 15).contagemDeNos());

