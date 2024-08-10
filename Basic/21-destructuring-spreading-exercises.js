// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

const array = [1, 2, 3, 4, 5];
const [primerElemento, segundoElemento] = array;

console.log(primerElemento); // 1
console.log(segundoElemento); // 2

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const array2 = [10, 20];

// Desestructuración con valor predeterminado
const [a, b, c = 30] = array;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30 (valor predeterminado)


// 3. Usa desestructuración para extraer dos propiedades de un objeto
const persona = {
    nombre: 'Paco',
    edad: 33,
    ciudad: 'Madrid'
  };
  
  // Desestructuración del objeto
  const { nombre, edad } = persona;
  
  console.log(nombre); 
  console.log(edad);   
  

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
const persona2 = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid'
  };
  
  // Desestructuración del objeto con nuevos nombres de variables
  const { nombre: nombrePersona, edad: edadPersona } = persona2;
  
  console.log(nombrePersona); 
  console.log(edadPersona);   
  

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

const usuario = {
    id: 1,
    info: {
      nombre: 'Ana',
      edad: 30,
      direccion: {
        ciudad: 'Barcelona',
        pais: 'España'
      }
    }
  };
  
  // Desestructuración del objeto anidado
  const { info: { nombre2, direccion: { ciudad } } } = usuario;
  
  console.log(nombre2); 
  console.log(ciudad); 
  
// 6. Usa propagación para combinar dos arrays en uno nuevo
const usuario2= {
    id: 1,
    info: {
      nombre: 'Ana',
      edad: 30,
      direccion: {
        ciudad: 'Barcelona',
        pais: 'España'
      }
    }
  };
  
  // Desestructuración del objeto anidado
  const { info: { nombre22, direccion: { ciudad2 } } } = usuario;
  
  console.log(nombre22); 
  console.log(ciudad2); 
  

// 7. Usa propagación para crear una copia de un array

const arrayOriginal = [1, 2, 3];
const copiaArray = [...arrayOriginal];

console.log(copiaArray); // [1, 2, 3]

// 8. Usa propagación para combinar dos objetos en uno nuevo
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

const objetoCombinado = { ...objeto1, ...objeto2 };

console.log(objetoCombinado);


// 9. Usa propagación para crear una copia de un objeto
const objetoOriginal = { a: 1, b: 2 };
const copiaObjeto = { ...objetoOriginal };

console.log(copiaObjeto); 

// 10. Combina desestructuración y propagación
const objeto = { a: 1, b: 2, c: 3, d: 4 };


const { d, f, ...resto } = objeto;

console.log(d); 
console.log(f); 
console.log(resto); 
