//Array
//É um tipo de dado dinâmico que cresce ou diminio a parti da adição de elementos.
//É uma estrutura heterogênia que possibilita a mistura de dados.
//Para a criação de um Array utiliza os [].

const valor = [7.7, 8.9, 6.3, 9.2]
console.log(valor[0], valor[3])
console.log(valor[4])// Como o valor nao existe, dara mensagem underfine(indefinido)

valor[4] = 10
console.log(valor[4])
console.log(valor)
console.log(valor.length)

valor.push({id: 3}, false, null, 'teste')
console.log(valor)

console.log(valor.pop())//metodo utilizado para tirar um indice.
delete valor[0]// metodo utilizado para deletar um atributo dentro de um objeto.
console.log(valor)

console.log(typeof valor)
