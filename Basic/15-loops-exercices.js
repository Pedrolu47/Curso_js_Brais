// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i <= 20; i++) {
    console.log(`Numero:  ${i}`);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let numero = 1; numero <= 100; numero++) {
    suma += numero;
}

console.log("La suma de los números del 1 al 100 es:", suma);


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(`Numero Par:  ${i}`);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Pedro", "Luis", "Paco", "Enrique", "Tomas", "Carlos"];
for (let i = 0; i < nombres.length; i++) {
    console.log(`Nombre:  ${nombres[i]}`);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
function contarVocales(cadena) {
    let contador = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }

    return contador;
}

const texto = "Hola, ¿cómo estás?";
console.log("El número de vocales en la cadena es:", contarVocales(texto));

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
function multiplicarArray(numeros) {
    let producto = 1;

    for (let i = 0; i < numeros.length; i++) {
        producto *= numeros[i];
    }

    return producto;
}

const arrayNumeros = [1, 2, 3, 4, 5];
console.log("El producto de los números en el array es:", multiplicarArray(arrayNumeros));


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// 8. Usa un bucle para invertir una cadena de texto
let palabra = "Hola";
let invertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
}

console.log(invertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Los primeros 10 números de la secuencia de Fibonacci son:", fibonacci);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

function filtrarMayoresA10(numeros) {
    let mayoresA10 = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            mayoresA10.push(numeros[i]);
        }
    }

    return mayoresA10;
}

const arrayNumeros2 = [5, 12, 8, 20, 3, 15];
console.log("Los números mayores a 10 en el array son:", filtrarMayoresA10(arrayNumeros2));
