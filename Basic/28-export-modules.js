// Exportacion de modulos

// Funciones
export function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

// Propiedades
export const PI = 3.1416;
export let name = "Yo Mismo";



// Clases

export class Circle {
    constructor(radius) {
        this.radius = radius
    }
    
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimeter() {
        return 2 * Math.PI * this.radius
    }
} 
// Exportación por defecto

/* export default function substract(a, b) {
    return a - b;
}
console.log(substract(5, 10)) */

 export default class MyClass {
    func() {
        console.log("Funcion de clase")
    }
 }

