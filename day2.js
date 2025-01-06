let hora = 10;
if (hora < 12){
    console.log("Bom dia");
}else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

let diaDaSemana = 2;
switch (diaDaSemana) {
    case 1 :
        console.log("segunda-feira");
        break;

    case 2 :
        console.log("terça-feira");
        break; 

    case 3 :
        console.log("quarta-feira");
        break;

    case 4 :
        console.log("quinta-feira");
        break;

    case 5 :
        console.log("sexta-feira");
        break;

    case 6 :
        console.log("sabado");
        break;

    case 7 :
        console.log("domingo");
        break;

    default:
        console.log("dia inválido");
        break;
}