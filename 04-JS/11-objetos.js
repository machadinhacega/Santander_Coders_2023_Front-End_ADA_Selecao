// OBJETOS
console.clear()

let pessoa = {
    nome: 'Iza',
    idade: 29
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

// adicionando
pessoa.altura = 1.59
console.log(pessoa)

// removendo
delete pessoa.altura
console.log(pessoa)

// percorrer

for (let chave in pessoa){
    console.log(pessoa[chave])
}

console.clear()
var array = [2, 5, 9];
console.log(array.indexOf(9, 4));