// Map
// Declaracion

let myMap = new Map();
console.log(myMap);

// Inicializacion

myMap = new Map([["name", "Luis"], ["apellido", "Sánchez"], [ "age", 51]]);
console.log(myMap);

// Métodos y propiedades

// Set

myMap.set("alias", "Yomismo");
myMap.set("name", "Pedro");

console.log(myMap);

// Get

console.log(myMap.get("name"));
console.log(myMap.get("alias"));
console.log(myMap.get("age"));
console.log(myMap.get("hobby"));

// Has

console.log(myMap.has("name"));
console.log(myMap.has("hobby"));

// Delete

myMap.delete("alias");

console.log(myMap);

// Keys
console.log(myMap.keys())

// Values
console.log(myMap.values())

// Entries
console.log(myMap.entries())

// Size
console.log(myMap.size)

// Clear

myMap.clear();

console.log(myMap)

