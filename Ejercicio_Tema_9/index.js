const logger = require("./logger")

const devuelveError = valor => {
    if (typeof valor === "number") {
        return valor * 2
    }
    throw new Error("El valor ingresado debe ser de tipo numérico")
} 

const numero = "Hola"

try {
    const doble = devuelveError(numero)
    logger.info("Funcionó correctamente.")
} catch(e) {
    logger.error("No se ha ingresado el tipo de dato correcto.")
} finally {
    logger.info("Soy el finally. Me ejecuto pase lo que pase")
}
