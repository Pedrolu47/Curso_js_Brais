// Console

// log
console.log("Hola, Paco")

// error
console.error("Esto es un mensaje de error")
/* console.log("Error al conectarse a la base de datos: ", new Error("Conexión fallida")); */

// warn
console.warn("Esto es un mensaje de advertencia");

// info
console.info("Esto es un mensaje de información");

// table

let data = [
    ["Pedro", 25],
    ["Paco", 30],
    ["Maria", 27],
    ["Luisa", 29],
    ["Carlos", 28]
]

console.table(data)

data = [
    {name: "Pedro", age: 25},
    {name: "Paco", age: 30},
    {name: "Maria", age: 27},
    {name: "Luisa", age: 29},
    {name: "Carlos", age: 28}
]
console.table(data)

// group

console.group("Usuario")
console.log("Nombre: Paco")
console.log("Edad: 30")
console.groupEnd("Usuario")

// time 
console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

// assert

let age = 18;

console.assert(age >= 18, "No eres mayor de edad");

// count
console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// clear

// console.clear()