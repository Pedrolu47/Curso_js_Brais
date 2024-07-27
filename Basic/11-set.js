// set

// Declaración

let mySet = new Set()
/* let mySet2 = {} No es un set */

console.log(mySet)


// Inicialización

mySet = new Set(["Pedro", "Luis", "Sanchez", "Yomismo", 51, true])

console.log(mySet)

// Métodos comunes

// Add y Delete

mySet.add("Brais")
mySet.add("Moure")

console.log(mySet)

mySet.delete("Brais")

console.log(mySet)
console.log(mySet.delete("Moure"))
console.log(mySet.delete(4))

console.log(mySet)


// Has

console.log(mySet.has("Pedro"))

// Size

console.log(mySet.size)


// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("Pedro")
mySet.add("Pedro")
mySet.add("Pedro")
console.log(mySet)