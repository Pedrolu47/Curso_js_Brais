// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
    console.log(a + b);
}

sumar(10, 20)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function encontrarMayorNumero(array) {
    if (array.length === 0) {
      return null; // Devuelve null si el array está vacío
    }
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
    return mayor;
  }
  
  const numeros = [1522, 789654];
  console.log(encontrarMayorNumero(numeros)); 

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(cadena) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}

let cadena = "Hola, ¿cómo estás? Paco";
console.log(contarVocales(cadena)); 

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function convertirAMayusculas(array) {
    return array.map(function(string) {
      return string.toUpperCase();
    });
  }
  
  const arrayDeStrings = ["hola", "adios", "mañana"];
  const arrayEnMayusculas = convertirAMayusculas(arrayDeStrings);
  console.log(arrayEnMayusculas); 
  

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const numero = 11;
  console.log(esPrimo(numero));


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2) {
    return array1.filter(function(elemento) {
      return array2.includes(elemento);
    });
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];
  const comunes = elementosComunes(array1, array2);
  console.log(comunes);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaDePares(array) {
    return array.reduce(function(suma, numero) {
      if (numero % 2 === 0) {
        return suma + numero;
      } else {
        return suma;
      }
    }, 0);
  }
  
  const arrayDeNumeros = [1, 2, 3, 4, 5, 6];
  const sumaPares = sumaDePares(arrayDeNumeros);
  console.log(sumaPares);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadradoDeNumeros(array) {
    return array.map(function(numero) {
      return numero * numero;
    });
  }
  
  const arrayDeNumeros2 = [1, 2, 3, 4, 5];
  const arrayCubo = cuadradoDeNumeros(arrayDeNumeros2);
  console.log(arrayCubo);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirCadena(cadena2) {
    return cadena2.split(" ").reverse().join(" ");
  }
  
  const cadena2 = "Hola, ¿cómo estás?";
  const cadenaInvertida = invertirCadena(cadena2);
  console.log(cadenaInvertida);

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero2) {
    if (numero2 === 0 || numero2 === 1) {
      return 1;
    } else {
      return numero2 * factorial(numero2 - 1);
    }
  }
  
  const numero2 = 5;
  const factorialCalculado = factorial(numero2);
  console.log(factorialCalculado);