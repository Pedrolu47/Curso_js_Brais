// If, else if y else

// If (si)
let age = 145;

/* if  ( age == 51) {
    console.log('Edad: 51');
} */


// Else  (si no)
if (age == 51) {
    console.log('Edad: 51');
} else if (age < 18) {
    console.log("es menor de edad")
} else {
    console.log("La edad no es 51");
}

// Operadores Ternarios
const message = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(message);

// Switch
let day = 17;
let dayName 

switch (day) {
    case 0:
        dayName = 'Domingo';
        break;
    case 1:
        dayName = 'Lunes';
        break;
    case 2:
        dayName = 'Martes';
        break;
    case 3:
        dayName = 'Miercoles';
        break;
    case 4:
        dayName = 'Jueves';
        break;
    case 5:
        dayName = 'Viernes';
        break;
    case 6:
        dayName = 'Sabado';
        break;
    default:
        dayName = 'Dia no valido';
}

console.log(dayName);

