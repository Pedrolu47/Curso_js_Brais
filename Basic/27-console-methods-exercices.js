// 1. Crea un función que utilice error correctamente
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

// Ejemplo de uso
const resultado = divide(10, 0);
console.log("Resultado:", resultado);


// 2. Crea una función que utilice warn correctamente

function checkAge(age) {
    if (age < 18) {
        console.warn("Advertencia: La edad es menor de 18 años.");
    } else {
        console.log("Edad aceptable.");
    }
    return age;
}

// Ejemplo de uso
const edad = checkAge(16);
console.log("Edad ingresada:", edad);


// 3. Crea una función que utilice info correctamente
function showInfo(message) {
    console.info("Información:", message);
    return message;
}

// Ejemplo de uso
const mensaje = showInfo("Este es un mensaje informativo.");
console.log("Mensaje mostrado:", mensaje);


// 4. Utiliza table

let myTable = [
    ["Pedro", 25],
    ["Paco", 30],
    ["Maria", 27],
    ["Luisa", 29],
    ["Carlos", 28]
]
console.log(myTable);

// 5. Utiliza group

console.group("Animales");
console.log("Nombre: Perro");
console.log("Edad: 5");
console.log("Nombre: Gato");
console.log("Edad: 9");
console.groupEnd("Animales");

// 6. Utiliza time
function performTask() {
    console.time("Tiempo de ejecución");

    // Simulación de una tarea que toma tiempo
    for (let i = 0; i < 1000000; i++) {
        // Realizar alguna operación
    }

    console.timeEnd("Tiempo de ejecución");
}

// Ejemplo de uso
performTask();


// 7. Valida con assert si un número es positivo
const numero = 10;
console.assert(numero < 0, "El número  es positivo");


// 8. Utiliza count
console.count("Hola, Paco")
console.count("Hola, Paco")
console.count("Hola, Paco")
console.count("Hola, Paco")
console.countReset("Hola, Paco")
console.count("Hola, Paco")

// 9. Utiliza trace
function myTrace() {
    myTrace1();
}
function myTrace1() {
    console.trace("Seguimiento la ejecución");
}
myTrace()

// 10. Utiliza clear
console.clear()