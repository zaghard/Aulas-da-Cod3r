// Novo recurso do ES2015

const pessoa =  {
   nome : "Ana",
   idade: 5,
   endereco:{
       logradouro: 'Rua Maria pinima',
       numero: 1237
   }

}
const { nome, idade} =  pessoa
console.log(nome, idade)

const { nome : n , idade : i} = pessoa 
// foi criada duas variaveis para retirar informações destintas da contante criada.
console.log(n , i)
const {endereco:{logradouro, numero, cep = '49100-000'}} = pessoa
console.log(logradouro, numero, cep)