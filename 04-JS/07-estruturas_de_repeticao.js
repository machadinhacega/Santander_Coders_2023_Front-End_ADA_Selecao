// Estruturas de Repetição 


// Laço condicional
console.clear()



// npm install readline sync
// instalou essa biblioteca nesse projeto
// npm install -g readline sync
// instalou essa biblioteca no computador, de forma global

const input = require ('readline-sync')

const numeroSorteado = 5
let numero = Number(input.question('Escolha um numero: '))

while (numero !== numeroSorteado) {
    console.log('Errooooooou')
    numero = Number(input.question('Escolha outro numero: '))
}
console.log('*** POW POW POW **** ')
console.log('Você acertou!')

