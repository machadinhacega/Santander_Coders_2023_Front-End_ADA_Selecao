// OPERADORES BOOLEANOS
//  ==  !=    >  >=  <  <=

const numero = 20

console.log(numero == 10)
console.log(numero > 10)

console.log (numero == '20')    //true
console.log (numero === '20')  //false


console.log (numero != '20')    //false
console.log (numero !== '20')  //true
// limpa do terminal tudo que ta escrito acima
console.clear()



// Conjunções Lógicas

// AND  &&
let idade = 26
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true
console.log(possoDirigir)

// OR   ||
idade = 40

const euVotoOuNumVoto = idade < 18 || idade >= 70
console.log(euVotoOuNumVoto)


// NOT  !
const estouGostandoDoCurso = false
console.log(!estouGostandoDoCurso)
