let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// usando o sinal de "!"  é utlizado para fazer a negação de um contexto.
// ex (!true) = false, (!!true) =  true

isAtivo = 1
console.log(!isAtivo)

console.log("Os verdadeiro...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!('' || null || 0 || ' '))

let more = ''
console.log(nome || 'Desconhecido') //Se estiver vazio preeche o nome com a string.







