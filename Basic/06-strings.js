// Strings  

// Concatenacion de cadenas
let myName = 'Pedro';
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);
console.log(`Hola ${myName}`);

// Longitud de una cadena
console.log(greeting);
console.log(greeting.length);
console.log(typeof greeting.length);

// Acceder a una letra de una cadena
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);
console.log(greeting[3]);
console.log(greeting[4]);
console.log(greeting[5]);
console.log(greeting[6]);
console.log(greeting[7]);
console.log(greeting[8]);
console.log(greeting[9]);
console.log(greeting[10]);
console.log(greeting[11]);
console.log(greeting[12]); // undefined

// Metodos comunes de las cadenas

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf('Hola'));
console.log(greeting.trim());
console.log(greeting.split(' '));
console.log(greeting.replace('Hola', 'Hola Mundo'));
console.log(greeting.includes('Hola'));
console.log(greeting.includes('hola'));
console.log(greeting.includes('Hola', 5));
console.log(greeting.slice(0, 5));
console.log(greeting.slice(6, 11));
console.log(greeting.replace('Hola', 'adios'));

// Template Literals (Plantillas Literales)
let message = `Hola, esto es
una cadena
de multiples lineas`;
console.log(message);

console.log(`Hola, ${myName}!`);

let email = 'pedro@pedro';
console.log(`Hola, ${email}!`);
console.log(`Hola, ${myName},  y mi nombre de usuario es ${email}!`);