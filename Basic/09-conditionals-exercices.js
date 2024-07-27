/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = 'Pedro';
console.log(myName);

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = 'Pedro';
let pass = '123';

if (user == 'Pedro' && pass == '123') {
    console.log('Login correcto');
} else {    
    console.log('Login incorrecto');
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// Establece el número que deseas verificar
var numero = 0; // Cambia esto por el número que deseas verificar

// Verifica si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan para ser mayor
let age = 12;

if (age >= 18) {
    console.log('Puedes votar');
} else {
    let anosFaltantes = 18 - age;
    console.log(`Faltan ${anosFaltantes} años para ser mayor`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age2 = 17;
const adulto = age2 >= 18 ? 'adulto' : 'menor';
console.log(adulto);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// Establece el mes
var mes = 11; // Cambia esto por el valor del mes (1 = enero, 12 = diciembre)

// Determina la estación del año
var estacion;

if (mes < 3 || mes === 12) {
    estacion = "invierno";
} else if (mes >= 3 && mes < 6) {
    estacion = "primavera";
} else if (mes >= 6 && mes < 9) {
    estacion = "verano";
} else {
    estacion = "otoño";
}

console.log("Nos encontramos en " + estacion + ".");


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// Establece el mes
var mes = 2; // Cambia esto por el valor del mes (1 = enero, 12 = diciembre)

// Determina el número de días en el mes
var dias;

if (mes === 2) {
    dias = "28 días en un año normal y 29 en un año bisiesto";
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    dias = "30 días";
} else {
    dias = "31 días";
}

console.log("El mes " + mes + " tiene " + dias + ".");

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'ingles';
switch (idioma) {
    case 'español':
        console.log('Hola');
        break;
    case 'ingles':
        console.log('Hello');
        break;
    case 'aleman':
        console.log('Hallo');
        break;
    default:
        console.log('Idioma no valido');
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let estacion2;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion2
         = "invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion2
         = "primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion2
         = "verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion2
         = "otono";
        break;
    default:
        estacion = "mes no valido";
}
console.log("Nos encontramos en " + estacion + ".");

// 10. Usa un switch para hacer de nuevo el ejercicio 7


switch (mes) {
    case 2:
        dias = "28 días en un año normal y 29 en un año bisiesto";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dias = "30 días";
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dias = "31 días";
        break;
    default:
        dias = "Mes no válido";
}

console.log("El mes " + mes + " tiene " + dias + ".");