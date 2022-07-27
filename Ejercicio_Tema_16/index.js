const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")
console.log(papelera)

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", evento => {
        console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")  // Agrega una clase mientras está siendo desplazado
        evento.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        evento.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => {
        console.log("He finalizado el arrastre")
        parrafo.classList.remove("dragging")  // Remueve la clase que se le agregó mientras era desplazado
    })
})


secciones.forEach(seccion => {
    seccion.addEventListener("dragover", evento => {
        evento.preventDefault()
        console.log("Drag Over")
        evento.dataTransfer.dropEffect = "link"
    })
    seccion.addEventListener("drop", evento => {
        console.log("Drop")
        const parrafo_id = evento.dataTransfer.getData("id")
        const parrafo = document.getElementById(parrafo_id)
        seccion.appendChild(parrafo)
    })
})

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})


papelera.addEventListener("drop", evento => {
    console.log("Borrando");
    const parrafo_id = evento.dataTransfer.getData("id")
    document.getElementById(parrafo_id).remove()
})