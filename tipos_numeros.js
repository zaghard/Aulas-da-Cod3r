const peso1 = 1.0
const peso2 = Number(2.0)

console.log( peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1  * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//Funcções

console.log(media.toFixed(2)) //fixa o valor das casas decimais nos parenteses
console.log(media.toString()) //converte ao valor origianl como String
console.log(media.toString(2))//Converte a String em valor Binario tendo  valor(2)
console.log(typeof media)
console.log(typeof Number)