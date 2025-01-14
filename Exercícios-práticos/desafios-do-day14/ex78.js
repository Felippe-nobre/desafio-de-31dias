function avaliarExpressao(expressao) {
    const operadores = []; 
    const operandos = []; 

    for (let i = 0; i < expressao.length; i++) {
        const char = expressao[i];

        if (char === ' ') {
            continue; 
        }

        if (char === '(') {
            
            continue;
        } else if (char === '+' || char === '*' || char === '/' || char === '-') {
            operadores.push(char);
        } else if (char === ')') {
            
            const operador = operadores.pop();
            const operandoDireita = operandos.pop();
            const operandoEsquerda = operandos.pop();

            if (operador === '+') {
                operandos.push(operandoEsquerda + operandoDireita);
            }else if (operador === '-') {
                operandos.push(operandoEsquerda - operandoDireita);
            }
             else if (operador === '*') {
                operandos.push(operandoEsquerda * operandoDireita);
            }else if (operador === '/') {
                operandos.push(operandoEsquerda / operandoDireita);
            }
        } else {
            
            operandos.push(parseInt(char, 10));
        }
    }

    
    return operandos.pop();
}


const expressao = "(6 - (2 * 5) + 3) / 2";
console.log(avaliarExpressao(expressao)); 
