// Coerção de Tipos

// Coerção explícita
const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoString = String(numero)
console.log(numeroEmFormatoString, typeof numeroEmFormatoString)

console.log(Number('123'))
console.log(parseFloat('15.8'))
console.log(Boolean(1))


console.clear()
// Coerção implícita

console.log(10 + 1)
console.log('10' + 1)
console.log('10' - 1)
console.log('10' * 1)

console.log(10 - "iza")


