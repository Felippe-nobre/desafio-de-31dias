const jsonString = `{
    "nome":"Felippe",
    "idade":21,
    "cidade":"Sao Paulo",
    "progamador":"true",
    "hobbies":["Jogar","Correr","Programar"],
    "endereco":{"rua":"Av. Paulista","numero":"100","complemento":"Casa1"}
}`

const obejetoConvertido = JSON.parse(jsonString)
console.log(obejetoConvertido.nome)
console.log(obejetoConvertido.idade)
console.log(obejetoConvertido.cidade)
console.log(obejetoConvertido.progamador)
console.log(obejetoConvertido.hobbies)
console.log(obejetoConvertido.endereco.rua)
console.log(obejetoConvertido.endereco.numero)
console.log(obejetoConvertido.endereco.complemento)