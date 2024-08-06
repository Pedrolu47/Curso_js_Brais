// Funciones

// Simple

function myFunction() {
    console.log("Hello World");
}   
for (let i = 0; i < 10; i++) {
    myFunction();
}
// Con parámetros
function myFuncWithParams(name) {
    console.log(`Hello, ${name}`);   
} 
myFuncWithParams("Pedro")

// Funciones anónimas

const myFunc = function(name) {
    console.log(`Hello, ${name}`);
}

myFunc("Tumismo")

// Arrow functions(Funcion flecha)

const myFunc3 = (name) => {
    console.log(`Hello, ${name}`);
}

myFunc3("Nombre 3")
const myFunc4 = name => console.log(`Hello, ${name}`);
myFunc4("Nombre 4")

// Párametros
function sum(a, b) {
    console.log(a + b); 
}

sum(10, 20)

function defaultSum(a = 0, b = 0) {
    console.log(a + b); 
}

defaultSum()
defaultSum(5)
defaultSum(b = 5, a = 10)

// Retorno de valores

function multi(a, b) {
    return a * b;
}
let result = multi(10, 20);
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Funcion externa");
    function intern() {
        console.log("Funcion interna");
    }
    intern(); 
}
extern()
/* intern() Error: fuera de scope */

// Funciones de orden superior

function applyFunc (func, param) {
    func(param)
}
applyFunc(myFunc4, "Función de orden superior")
console.log(myFunc4, "Función de orden superior") 

// ForEach 

myArray = [1, 2, 3, 4, 5]
myArray.forEach((element) => {
    console.log(element)
})

myArray.forEach((element) => console.log(element))
// Se puede hacer igual con set y map