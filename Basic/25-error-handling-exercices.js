// 1. Captura una excepción utilizando try-catch
try {
    // Código que intenta ejecutar
    console.log(myObject.noobject)
    console.log("Finaliza el codigo sin errores")
} catch (error) {
    // Bloque de Error
    console.log(error)
    console.log("Finaliza el codigo con errores, ejercicio 1")
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    // Código que puede lanzar una excepción
    let resultado = funcionQuePuedeFallar();
    console.log(resultado);
} catch (error) {
    // Código que se ejecuta si ocurre una excepción
    console.error("Se ha producido un error:", error);
} finally {
    // Código que se ejecuta siempre, haya o no excepción
    console.log("Bloque finally ejecutado. Ejercicio 2");
}

// 3. Lanza una excepción genérica
try {
    // Lanzar una excepción genérica
    throw new Error("Esto es una excepción genérica");
} catch (error) {
    // Manejar la excepción
    console.error("Se ha producido un error:", error.message);
} finally {
    // Código que se ejecuta siempre
    console.log("Bloque finally ejecutado. Ejercicio 3");
}



// 4. Crea una excepción personalizada
// 5. Lanza una excepción personalizada
class excepcionPersonalizada extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "Excepcion personalizada ejercicio 4";
    }
}

try {
    // Lanzar una excepción personalizada
    throw new excepcionPersonalizada("Esto es una excepción personalizada");
} catch (error) {
    // Manejar la excepción
    console.error(`${error.name}: ${error.message}`);
} finally {
    // Código que se ejecuta siempre
    console.log("Bloque finally ejecutado.");
}


// 6. Lanza varias excepciones según una lógica definida
// Definir una clase de excepción personalizada
class MiExcepcionPersonalizada extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiExcepcionPersonalizada";
    }
}

try {
    // Lógica que determina qué excepción lanzar
    let valor = Math.random(); // Generar un número aleatorio entre 0 y 1

    if (valor < 0.3) {
        throw new Error("Esto es una excepción genérica");
    } else if (valor < 0.6) {
        throw new MiExcepcionPersonalizada("Esto es una excepción personalizada");
    } else {
        throw new RangeError("Esto es una excepción de rango");
    }
} catch (error) {
    // Manejar la excepción
    console.error(`${error.name}: ${error.message}`);
} finally {
    // Código que se ejecuta siempre
    console.log("Bloque finally ejecutado.");
}


// 7. Captura varias excepciones en un mismo try-catch
// Definir una clase de excepción personalizada
class MiExcepcionPersonalizada2 extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiExcepcionPersonalizada2";
    }
}

try {
    // Lógica que puede lanzar diferentes excepciones
    let valor = Math.random(); // Generar un número aleatorio entre 0 y 1

    if (valor < 0.3) {
        throw new Error("Esto es una excepción genérica");
    } else if (valor < 0.6) {
        throw new MiExcepcionPersonalizada2("Esto es una excepción personalizada");
    } else {
        throw new RangeError("Esto es una excepción de rango");
    }
} catch (error) {
    // Manejar diferentes tipos de excepciones
    if (error instanceof MiExcepcionPersonalizada2) {
        console.error("Excepción personalizada capturada:", error.message);
    } else if (error instanceof RangeError) {
        console.error("Excepción de rango capturada:", error.message);
    } else {
        console.error("Excepción genérica capturada:", error.message);
    }
} finally {
    // Código que se ejecuta siempre
    console.log("Bloque finally ejecutado.");
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
// Array de valores que intentaremos transformar a float
const valores = ["123.45", "abc", "456.78", "def", "789.01"];

for (let i = 0; i < valores.length; i++) {
    try {
        // Intentar transformar el valor a float
        let valorFloat = parseFloat(valores[i]);
        
        // Verificar si la transformación fue exitosa
        if (isNaN(valorFloat)) {
            throw new Error(`El valor "${valores[i]}" no es un número válido`);
        }

        console.log(`El valor transformado es: ${valorFloat}`);
    } catch (error) {
        // Capturar y mostrar el error
        console.error(`Error al transformar el valor en la posición ${i}:`, error.message);
    }
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function realizarOperacionConReintentos(operacion, maxReintentos = 10) {
    let reintentos = 0;

    while (reintentos < maxReintentos) {
        try {
            // Intentar realizar la operación
            operacion();
            console.log("Operación realizada con éxito.");
            break; // Salir del bucle si la operación es exitosa
        } catch (error) {
            reintentos++;
            console.error(`Error en el intento ${reintentos}:`, error.message);

            if (reintentos >= maxReintentos) {
                console.error("Se alcanzó el número máximo de reintentos.");
            }
        }
    }
}

// Ejemplo de uso de la función
realizarOperacionConReintentos(() => {
    // Simular una operación que puede fallar
    if (Math.random() < 0.7) {
        throw new Error("Operación fallida");
    }
    console.log("Operación exitosa");
});
