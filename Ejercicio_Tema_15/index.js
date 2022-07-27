const nombre = "Martín"
const apellido = "Zaninovich"

const objetoDatos = {
    nombre: nombre,
    apellido: apellido
}

sessionStorage.setItem("objeto", JSON.stringify(objetoDatos))

localStorage.setItem("objeto", JSON.stringify(objetoDatos))

document.cookie = `nombreCaducidad = ${objetoDatos.nombre} ${objetoDatos.apellido}; max-age = 120` 
