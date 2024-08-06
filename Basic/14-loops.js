// Loops o bucles

// For
for (let i = 0; i < 5; i++) {
    console.log(`Hola Paco ${i}`);
}

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
    console.log(`Elemento:  ${i}`);
}
for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento:  ${i}`);
}

// While

let i = 0;
while (i < 5) {
    console.log(`Hola Tu ${i}`);
    i++;
}
// Bucle infinito
/* while (true) {
    console.log(`Hola Tu ${i}`);
    i++;
} */

// Do While

let j = 6;
do {
    console.log(`Hola Yo ${j}`);
    j++;
} while (j < 5);

// For of

myString = "Buenos dias, como estamos?";

myArray = [1, 2, 3, 4];
mySet = new Set(["Pedro", "Luis", "Sanchez", "Yomismo", 51, true]);
myMap = new Map([["name", "Luis", ["age", 51]]]);

for (let valor of myArray) {
    console.log(valor);
}
for (let valor of mySet) {
    console.log(valor);
}
for (let valor of myMap) {
    console.log(valor);
}
for (let valor of myString) {
    console.log(valor);
}
// Buenas practicas

 // Break y Continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
    console.log(`Hola Paco ${i}`);
}