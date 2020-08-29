let valor //não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString())//Erro, pois a propriedade toString nao lê valores "null".

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(!!produto.preco)
