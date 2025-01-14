function contarRgressivo(numero){ 
    if (numero == 0) {
        console.log("FIM");
        return;
        
    }
    console.log(numero);
    contarRgressivo(numero - 1);
}

contarRgressivo(10);