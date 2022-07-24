const misDatosPersonales = {
    nombre: "Martín",
    apellido: "Zaninovich",
    edad: 36,
    altura: 1.86,
    isDeveloper: true
};

const miEdad = misDatosPersonales.edad;


const listaObjetos = [
    {
        ...misDatosPersonales
    },
    {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 54,
        altura: 1.69,
        isDeveloper: true
    },
    {
        nombre: "Pablo",
        apellido: "Gonzáles",
        edad: 28,
        altura: 1.95,
        isDeveloper: true
    }
]


const listaObjetosOrdenada = listaObjetos.sort((a, b) => b.edad - a.edad)

console.log(listaObjetosOrdenada);