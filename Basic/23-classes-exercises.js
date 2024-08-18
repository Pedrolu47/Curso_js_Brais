/* // 1. Crea una clase que reciba dos propiedades
class MiClase {
    constructor(propiedad1, propiedad2) {
      this.propiedad1 = propiedad1;
      this.propiedad2 = propiedad2;
    }
  
    
  
  // Crear una instancia de la clase
  
// 2. Añade un método a la clase que utilice las propiedades
mostrarPropiedades() {
    console.log(`Propiedad 1: ${this.propiedad1}`);
    console.log(`Propiedad 2: ${this.propiedad2}`);
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const instancia = new MiClase('valor1', 'valor2');
// Mostrar las propiedades
instancia.mostrarPropiedades(); */
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático

class MiClase {
    constructor(propiedad1, propiedad2) {
      this.propiedad1 = propiedad1;
      this.propiedad2 = propiedad2;
    }
  
    mostrarPropiedades() {
      console.log(`Propiedad 1: ${this.propiedad1}`);
      console.log(`Propiedad 2: ${this.propiedad2}`);
    }
  
    combinarPropiedades() {
      return `${this.propiedad1} ${this.propiedad2}`;
    }
  
    static descripcionClase() {
      return 'Esta es una clase que maneja dos propiedades y tiene métodos para mostrarlas y combinarlas.';
    }
  }
  
  // Crear una instancia de la clase
  const instancia = new MiClase('Hola', 'Mundo');
  
  // Mostrar las propiedades
  instancia.mostrarPropiedades();
  
  // Utilizar el método de combinar propiedades
  console.log(instancia.combinarPropiedades());
  
  // Llamar al método estático
  console.log(MiClase.descripcionClase());
// 6. Crea una clase que haga uso de herencia
// Clase base
class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }
  
  // Clase derivada
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // Llama al constructor de la clase base
      this.raza = raza;
    }
  
    hacerSonido() {
      console.log(`${this.nombre} ladra.`);
    }
  
    mostrarRaza() {
      console.log(`La raza de ${this.nombre} es ${this.raza}.`);
    }
  }
  
  // Crear una instancia de la clase derivada
  const miPerro = new Perro('Firulais', 'Labrador');
  
  // Utilizar los métodos
  miPerro.hacerSonido(); // Firulais ladra.
  miPerro.mostrarRaza(); // La raza de Firulais es Labrador.
  

// 7. Crea una clase que haga uso de getters y setters
/* class Persona {
    constructor(nombre, edad) {
      this._nombre = nombre;
      this._edad = edad;
    }
  
    // Getter para el nombre
    get nombre() {
      return this._nombre;
    }
  
    // Setter para el nombre
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    // Getter para la edad
    get edad() {
      return this._edad;
    }
  
    // Setter para la edad
    set edad(nuevaEdad) {
      if (nuevaEdad > 0) {
        this._edad = nuevaEdad;
      } else {
        console.log('La edad debe ser un número positivo.');
      }
    }
  
    // Método para mostrar la información de la persona
    mostrarInformacion() {
      console.log(`Nombre: ${this._nombre}, Edad: ${this._edad}`);
    }
  }
  
  // Crear una instancia de la clase
  const persona = new Persona('Juan', 30);
  
  // Utilizar los getters
  console.log(persona.nombre); // Juan
  console.log(persona.edad); // 30
  
  // Utilizar los setters
  persona.nombre = 'Carlos';
  persona.edad = 35;
  
  // Mostrar la información actualizada
  persona.mostrarInformacion(); 
  
  // Intentar establecer una edad negativa
  persona.edad = -5; 
  
 */
// 8. Modifica la clase con getters y setters para que use propiedades privadas
/* class Persona {
    #nombre;
    #edad;
  
    constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
    }
  
    // Getter para el nombre
    get nombre() {
      return this.#nombre;
    }
  
    // Setter para el nombre
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
  
    // Getter para la edad
    get edad() {
      return this.#edad;
    }
  
    // Setter para la edad
    set edad(nuevaEdad) {
      if (nuevaEdad > 0) {
        this.#edad = nuevaEdad;
      } else {
        console.log('La edad debe ser un número positivo.');
      }
    }
  
    // Método para mostrar la información de la persona
    mostrarInformacion() {
      console.log(`Nombre: ${this.#nombre}, Edad: ${this.#edad}`);
    }
  }
  
  // Crear una instancia de la clase
  const persona = new Persona('Juan', 30);
  
  // Utilizar los getters
  console.log(persona.nombre); // Juan
  console.log(persona.edad); // 30
  
  // Utilizar los setters
  persona.nombre = 'Carlos';
  persona.edad = 35;
  
  // Mostrar la información actualizada
  persona.mostrarInformacion(); // Nombre: Carlos, Edad: 35
  
  // Intentar establecer una edad negativa
  persona.edad = -5; // La edad debe ser un número positivo.
   */
class Persona {
  #nombre;
  #edad;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  // Getter para el nombre
  get nombre() {
    return this.#nombre;
  }

  // Setter para el nombre
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  // Getter para la edad
  get edad() {
    return this.#edad;
  }

  // Setter para la edad
  set edad(nuevaEdad) {
    if (nuevaEdad > 0) {
      this.#edad = nuevaEdad;
    } else {
      console.log('La edad debe ser un número positivo.');
    }
  }

  // Método para mostrar la información de la persona
  mostrarInformacion() {
    console.log(`Nombre: ${this.#nombre}, Edad: ${this.#edad}`);
  }
}

// Crear una instancia de la clase
const persona = new Persona('Juan', 30);

// Utilizar los getters para mostrar los valores iniciales
console.log(`Nombre inicial: ${persona.nombre}`); // Juan
console.log(`Edad inicial: ${persona.edad}`); // 30

// Utilizar los setters para modificar los valores
persona.nombre = 'Carlos';
persona.edad = 35;

// Mostrar la información actualizada utilizando el método mostrarInformacion
persona.mostrarInformacion(); // Nombre: Carlos, Edad: 35

// Intentar establecer una edad negativa
persona.edad = -5; // La edad debe ser un número positivo.

// 9. Utiliza los get y set y muestra sus valores
class Persona {
    #nombre;
    #edad;
  
    constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
    }
  
    // Getter para el nombre
    get nombre() {
      return this.#nombre;
    }
  
    // Setter para el nombre
    set nombre(nuevoNombre) {
      this.#nombre = nuevoNombre;
    }
  
    // Getter para la edad
    get edad() {
      return this.#edad;
    }
  
    // Setter para la edad
    set edad(nuevaEdad) {
      if (nuevaEdad > 0) {
        this.#edad = nuevaEdad;
      } else {
        console.log('La edad debe ser un número positivo.');
      }
    }
  
    // Método para mostrar la información de la persona
    mostrarInformacion() {
      console.log(`Nombre: ${this.#nombre}, Edad: ${this.#edad}`);
    }
  }
  
  // Crear una instancia de la clase
  const persona = new Persona('Juan', 30);
  
  // Utilizar los getters para mostrar los valores iniciales
  console.log(`Nombre inicial: ${persona.nombre}`); // Juan
  console.log(`Edad inicial: ${persona.edad}`); // 30
  
  // Utilizar los setters para modificar los valores
  persona.nombre = 'Carlos';
  persona.edad = 35;
  
  // Mostrar la información actualizada utilizando el método mostrarInformacion
  persona.mostrarInformacion(); // Nombre: Carlos, Edad: 35
  
  // Intentar establecer una edad negativa
  persona.edad = -5; // La edad debe ser un número positivo.
  

class Perro extends Persona {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }

    mostrarRaza() {
        console.log(`La raza de ${this.nombre} es ${this.raza}.`);
    }
}
