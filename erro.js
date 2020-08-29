function tratarErroElancar(erro) {
    //throw new Error('...')
    //throw 10
    throw "mensagem"
}

function nomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {
    nome: "Roberto"
}
nomeGritado(obj)