// 1. Crea un objeto con 3 propiedades
let frutas = {
    nombre: "Manzana",
    color: "Verde",
    precio: 100
}

// 2. Accede y muestra su valor
console.log(frutas)

// 3. Agrega una nueva propiedad
frutas.origen = "Navarra";
console.log(frutas);

// 4. Elimina una de las 3 primeras propiedades
delete frutas.color;
console.log(frutas);

// 5. Agrega una función e invócala
let miObjeto = {
    nombre: "Pedro",
    edad: 51
};

// Agregar una función al objeto
miObjeto.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre);
};

// Invocar la función
miObjeto.saludar(); 

// 6. Itera las propiedades del objeto
for (let key in miObjeto) {
    console.log(key + ": " + miObjeto[key])
}

// 7. Crea un objeto anidado
// Crear un objeto anidado
let persona = {
    nombre: "Ana",
    edad: 25,
    direccion: {
        calle: "Calle Mayor",
        ciudad: "Madrid",
        pais: "España"
    }
};




// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona.direccion.calle); // Salida: Calle Mayor
console.log(persona.direccion.ciudad); // Salida: Madrid
console.log(persona.direccion.pais); // Salida: España

// 9. Comprueba si los dos objetos creados son iguales
console.log(persona == miObjeto);


// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.edad == miObjeto.edad);