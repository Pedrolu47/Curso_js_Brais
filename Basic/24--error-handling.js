// Excepción

// Produce una excepcion
/* let myObject */
// console.log(myObject.email)

// Captura de errores de errores

// try/catch
/* try {
    // Código que intenta ejecutar
    console.log(myObject.paco)
    console.log("Finaliza el codigo sin errores")
} catch (error) {
    // Bloque de Error
    console.log(error)
    console.log("Finaliza el codigo con errores")
}
// Captura del error
try {
    console.log(myObject.paco)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} */

// finally
/* try {
    console.log(myObject.paco)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Finaliza el programa")
} */

// Lanzamiento de errores

// throw
/* throw new Error("Se ha producido un error") */


function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}


