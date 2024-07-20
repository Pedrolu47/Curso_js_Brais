// Operadores

// Operadores Aritmeticos
/* let a = 10;
let b = 5;

// Suma
console.log(a + b);
// Resta    
console.log(a - b);
// Multiplicacion
console.log(a * b);
// Division
console.log(a / b);
// Modulo
console.log(a % b);
// Potencia
console.log(a **b);

a++ // Incremento
console.log(a);
b-- // Decremento
console.log(b)

console.log(a + b);  */ // Despues de incremento y decremento

// Operadores de Asignacion

/* let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);
myVariable -= 2;
console.log(myVariable);
myVariable *= 2;
console.log(myVariable);
myVariable /= 2;
console.log(myVariable);
myVariable %= 2;
console.log(myVariable);
myVariable **= 2;
console.log(myVariable) */


// Operadores de Comparacion
/* console.log(a)
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == "11");  // Igualdad por valor
console.log( a !== b);
console.log(a != b);
console.log(a === a); // Igualdad por valor y tipo */

// Otras comparaciones
/* console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 == ""); // true
console.log(0 === ""); // false
console.log(0 == null); // true
console.log(0 == undefined); // true
console.log(0 == NaN); // false
console.log(undefined == null); */ // true
// Truthy values (valores verdaderos)
// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// "" Cadenas de texto vacias
// NaN
// false

// Operadores Logicos
// and(&&) cuando una de las condiciones es falsa el resultado es falso
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);

// or(||) cuando una de las condiciones es verdadera el resultado es verdadero
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
// si se cumple el OR es true

console.log(5 > 10 && 15 > 20 || 30 < 40);

// not(!)
console.log(!(5 > 10));
console.log(!(5 < 10));
console.log(!(5 === 10));
console.log(!true)

// Operadores ternarios
const isRaining = false;

isRaining ? console.log('Está lloviendo') : console.log('No está lloviendo');