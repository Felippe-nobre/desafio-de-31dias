const obejeto = {
    nome: "Felippe",
    idade: 21,
    cidade: "Sao Paulo",
    progamador:'true',
    hobbies:["Jogar", "Correr", "Programar"],
    endereco:{
        rua:"Av. Paulista",
        numero:"100",
        complemento:"Casa1"
    }
}

console.log(JSON.stringify(obejeto))

const jsonString = `{
    "nome": "Felippe",
    "idade": 21,
    "cidade": "Sao Paulo",
    "progamador":true,
    "hobbies":["Jogar", "Correr", "Programar"],
    "endereco":{
        "rua":"Av. Paulista",
        "numero":"100",
        "complemento":"Casa1"
    }
}`

const obejetoConvertido = JSON.parse(jsonString)

console.log(obejetoConvertido)
