// Cadena de texto (String) se pueden declarar con comillas dobles o simples
let myName = 'Pedro';
let lastName = 'Sánchez';

console.log(myName + ' ' + lastName);
console.log(`Hello, ${myName} ${lastName}!`);

// Numeros (Number)
let age = 51; // Entero - Integer
let height = 1.75; // Decimal - Float
console.log(age);
console.log(height);
console.log(`Edad:${age}  y altura: ${height}`);

// Booleanos (Boolean)
let isMarried = true;
let isSingle = false;
console.log(isMarried);
console.log(isSingle);
console.log(`Es casado: ${isMarried}  y soltero: ${isSingle}`);

// Undefined
let undefinedValue;
console.log(undefinedValue);
console.log(`Esto es: ${undefinedValue}`);

// Null
let nullValue = null;
console.log(nullValue);
console.log(`Esto es: ${nullValue}`);

// Symbol
let symbolValue = Symbol('123');
console.log(symbolValue);


//BigInt

let bigIntValue = 9007199254740991n;
let bigIntValue2 = BigInt(900719925412541311315451313135740991);
console.log(bigIntValue);
console.log(bigIntValue2);

// Mostrar el tipo de dato
console.log(typeof myName);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isMarried);  
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof symbolValue);
console.log(typeof bigIntValue);
console.log(typeof bigIntValue2);