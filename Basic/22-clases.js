// Clases

class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias
    }   
}
// Sintaxis
let person = new Person("Pedro", 52, "Yomismo")
let person2 = new Person("Pedro", 52, "Yomismo")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {
    constructor(name = "Nombre por defecto", age = 0, alias = "Alias por defecto") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person3 = new DefaultPerson("Paco")
console.log(person3)

// Acceso a propiedades

console.log(person3.name)   
console.log(person3.age)
console.log(person3["alias"])

person3.alias = "Yomismo"
console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias
    }
    walk() {
        console.log("La persona camina.")
    }
}

let person4 = new PersonWithMethod("Pedro", 52, "Yomismo")
console.log(person4)
person4.walk()

// Propiedades privadas
class PrivatePerson {
    #bank
    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay() {
        this.#bank 
    }
}
let person5 = new PrivatePerson("Pedro", 52, "Yomismo", "IBAN47882797394827")

/* console.log(person5.#bank) 
person5.bank = "new IBAN09090909090)
No podemos acceder ni para imprimirla ni para modificarla */
console.log(person5)

// Getters y setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"