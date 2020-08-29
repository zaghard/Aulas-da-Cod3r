const[a] = [10]
console.log(a)

//Exemplo de como pegar multiplos elementos e desistruturar seus dados.
//Tirando de sua estrutura e aplicando em multiplas variaveis.

const [n1, , n3, , n5, n6 = 0] =  [10 , 7, 9, 8]
console.log(n1, n3, n5, n6)

const[, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)