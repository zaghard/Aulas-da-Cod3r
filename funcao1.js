//Função sem retorno
function imprimirsoma (a, b) {
    console.log (a + b)
}
imprimirsoma (2, 3)


//Função com retorno

function soma(a, b =1) {
    return a + b
}
console.log(soma(2, 10))
console.log(soma(2))
