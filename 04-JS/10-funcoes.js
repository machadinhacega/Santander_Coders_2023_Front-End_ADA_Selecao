// FUNÇÕES
console.clear()

function saudacao() {
    console.log('Fala, cachorro!')
}

saudacao()


// parâmetros
console.clear()

function saudacao(nome) {
    console.log(`Fala, ${nome}!`)
}

saudacao('Iza')


function saudaCurso1(nome, curso) {
    console.log(`Olá, ${nome}! Vamos começar o curso de ${curso}`)
}
saudaCurso1('Iza')


function saudaCurso(nome, curso ='JavaScript') {
    console.log(`Olá, ${nome}! Vamos começar o curso de ${curso}`)
}

saudaCurso('Iza')
saudaCurso('Iza', 'HTML/CSS')


// retorno
console.clear()

function soma (n1, n2) {
    return n1 + n2
}

let resultado = soma(1,2)
console.log(resultado)
console.log(resultado*5)


// ARROW FUNCTION
// pesquisar a documentação no ndm
