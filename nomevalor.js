// par nome /valor
const saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'// contexto léxico 2
    return saudacao
}
//Objeto são grupos de aninhados de pares nome/valor
const Cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        
    }
}