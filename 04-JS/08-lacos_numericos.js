
// Acumulador
let acumulador = 0
console.log(acumulador)

acumulador = acumulador + 1
console.log(acumulador)

acumulador += 5
console.log(acumulador)

acumulador ++
console.log(acumulador)

acumulador --
console.log(acumulador)



// Estrutura for


//  começa em 0, vai repetir ate ser menor que 10, a cada repetição soma 1
for (let i = 0; i < 9; i++){
    console.log(i+1)
}
 




// PREOBLEMA
console.clear()

const input = require ('readline-sync')

// const nota = Number(input.question('Informe a nota: '))
// let media = (nota1 + nota2 + nota3)/3

let nota
let soma = 0
for (let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a ${i}a nota: `))

    soma += nota
}

console.log(`A média do aluno é ${soma/3}`)