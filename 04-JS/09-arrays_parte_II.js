console.clear()

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// slice (fatiamento)
console.log(arr1.slice(0,2))
console.log(arr1.slice(2)) 

// adicionando
// no final
arr2.push(10, 20, 34, 72)
arr2.push(15)
console.log(arr2)
// no inicio
arr2.unshift(2)
console.log(arr2)

// removendo
// o ultimo
arr2.pop()
console.log(arr2)
// o primeiro
arr2.shift()
console.log(arr2)


// concatenar
console.clear()

arr1 = ['Iza', 'Machado']
arr2 = [29, true]

console.log('Array 1', arr1)
console.log('Array 2', arr2)

console.log('Array 1 + Array 2')
console.log(arr1.concat(arr2))

console.log('Array 2 + Array 1')
console.log(arr2.concat(arr1))


// indexOf  |  lastIndexOf
console.clear()

arr1 = [30, 12, 45, 34, 29]
console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34)

let indiceDoElemento35 = arr1.indexOf(35)
console.log(indiceDoElemento35)

let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3)
console.log(arr3.indexOf(3))
console.log(arr3.lastIndexOf(3))


// existencia de um elemento
console.clear()
arr1 = [1, 2, 3, 4, 5]
console.log(arr1)

console.log(arr1.includes(1))
console.log(arr1.includes(6))

// reverse
console.clear()
console.log(arr1)

const arr1Invert = arr1.reverse()
console.log(arr1Invert)


