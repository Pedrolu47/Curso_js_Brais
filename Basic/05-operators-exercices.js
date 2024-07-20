// 1. Crea una variable para cada operación aritmética
// Operadores aritméticos(suma, resta, multiplicacion, division, modulo, potencia, incremento y decremento)
let a = 10;
let b = 20; 

let sum = a + b; 
let rest = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;
let pot = a ** b;
// Incremento y Decremento
let incre = a++;
let decre = a--;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
// Operadores asignacion(+=, -=, *=, /=, %=, **=)
let asig = 3;
asig += 2;
asig -= 2;
asig *= 2;
asig /= 2;
asig %= 2;
asig **= 2;



// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
// Operadores de comparación(>, <, >=, <=, ==, ===, !==, !=)
console.log(a)
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === a)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
// Operadores de comparación
console.log(5 > 10); // false, porque 5 no es mayor que 10
console.log("hola" == "adios"); // false, porque "hola" no es igual a "adios"
console.log(10 != 10); // false, porque 10 es igual a 10
console.log("10" === 10); // false, porque "10" (string) no es estrictamente igual a 10 (número)
console.log(100 <= 50); // false, porque 100 no es menor o igual a 50


// 5. Utiliza el operador lógico and
// &&
console.log(87 > 107 && 120 > 121);

// 6. Utiliza el operador lógico or
// ||
console.log(87 > 107 || 120 > 121);

// 7. Combina ambos operadores lógicos
// && - ||
console.log(87 > 107 && 120 > 121 || 120 > 121);

// 8. Añade alguna negación
console.log(!(5 === 5))

// 9. Utiliza el operador ternario
console.log(10 > 5 ? '10 es mayor que 5' : '10 no es mayor que 5');

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((5 + 5) > (2 * 5) && (10 - 5) < (5 / 1)); // false
console.log((20 / 4) === (10 - 2) || (30 - 10) !== (20 + 2)); // true
console.log(!(10 * 2) < (3 + 7) && (20 / 2) > (10 * 2)); // false
console.log((15 % 2) !== 0 && (20 / 5) === 4); // true
console.log((3 ** 2) > (2 ** 3) || (10 * 0) !== 0); // true
