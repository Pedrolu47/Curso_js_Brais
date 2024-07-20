// 1. Concatena dos cadenas de texto
let saludo = 'Buenas ';
let nombre = 'Paco';
let saludocompleto = saludo + nombre;

console.log(saludo + nombre);

// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length);

// 3. Muestra el primer y último carácter de un string
console.log(saludo[0]);
console.log(saludo[5]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let varias = `Esto es 
una cadena
de texto de
varias lineas`
console.log(varias);
// 6. Interpola el valor de una variable en un string
let inter = `Hola ${nombre} y me llamo ${saludo}`;
console.log(inter);


// 7. Reemplaza todos los espacios en blanco de un string por guiones
let conGuiones = varias.replace(/ /g, "-");
console.log(conGuiones);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let contiene = varias.includes("cadena");
console.log(contiene);

// 9. Comprueba si dos strings son iguales
console.log(varias === conGuiones ? "Las cadenas son iguales" : "Las cadenas no son iguales");

// 10. Comprueba si dos strings tienen la misma longitud
console.log(varias.length === conGuiones.length ? "Las cadenas tienen la misma longitud" : "Las cadenas no tienen la misma longitud");