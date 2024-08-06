// 1. Crea un array que almacene cinco animales
let animales = ['perro', 'gato', 'loro', 'conejo', 'vaca'];
console.log(animales);



// 2. Añade dos más. Uno al principio y otro al final

animales.unshift('caballo');
console.log(animales);
animales.push('tigre');
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add("libro1"); // Repetido
libros.add("libro6"); //  Nuevo
console.log(libros);
// 6. Elimina uno concreto a tu elección

libros.delete("libro4");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre

let mes = new Map([[1, "enero"], [2, "febrero"], [3, "marzo"], [4, "abril"], [5, "mayo"], [6, "junio"], [7, "julio"], [8, "agosto"], [9, "septiembre"], [10, "octubre"], [11, "noviembre"], [12, "diciembre"]]);


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mes.has(5));
// 9. Añade al mapa una clave con un array que almacene los meses de verano

mes.set("verano", ["junio", "julio", "agosto"]);
console.log(mes);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let miSet = new Set(miArray);
let map = new Map();
map.set(miSet);

console.log(miArray);
console.log(miSet);
console.log(map);