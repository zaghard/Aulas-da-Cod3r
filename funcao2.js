//Armazenando uma funcção em uma variavel
const imprsoma = function (a, b){
    console.log(a + b)
}
imprsoma (20, 10)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 4))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 5))

const impri2 = a => console.log(a)
impri2('Legal!!')