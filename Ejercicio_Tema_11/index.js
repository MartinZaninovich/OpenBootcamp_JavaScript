class Estudiante {
    constructor(nombre, asignatura1, asignatura2, asignatura3) {
        this.nombre = nombre
        this.asignaturas = [
            asignatura1 = asignatura1,
            asignatura2 = asignatura2,
            asignatura3 = asignatura3
        ]
    }
    obtenDatos() {
        return this
        // console.log(this)
    }
}

const nuevoEstudiante = new Estudiante("Martín", "JavaScript", "HTML", "CSS")

const datos = nuevoEstudiante.obtenDatos()
console.log(datos)

// nuevoEstudiante.obtenDatos()