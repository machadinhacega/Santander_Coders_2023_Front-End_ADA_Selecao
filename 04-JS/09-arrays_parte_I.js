// Arrays (Parte I)
console.clear()

let arr = ['Iza', 29, 'Designer', true]

console.log(arr)
console.log(arr[0])

console.log(arr.length)

// Percorrendo o array

console.log('#### Percorrendo o array ####')
for (i=0; i<arr.length; i++){
    console.log(arr[i])

}


// for of
console.log('######## FOR OF ########')
// o que estou dizendo abaixo: a cada iteração eu quero que você pegue 1 elemento do array
for (let elemento of arr){
    console.log(elemento)
}

// for in
console.log('######## FOR in ########')
// o que estou dizendo abaixo: a cada iteração eu quero que você pegue 1 indice do array
for (let indice in arr){
    console.log(indice)
}

console.log()