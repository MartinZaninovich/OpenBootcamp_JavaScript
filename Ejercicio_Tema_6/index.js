let listaCompras = ["harina", "azúcar", "leche", "pan", "carne"];
listaCompras.push("aceite de girasol");  // Añadiendo "aceite de girasol"
listaCompras.pop("aceite de girasol");   // Eliminando "aceite de girasol"

let peliFav = [
    {titulo: "Terminator 2", director: "James Cameron", fecha: 1991},
    {titulo: "Tiburón", director: "Steven Spielberg", fecha: 1975},
    {titulo: "Manhattan", director: "Woody Allen", fecha: 1979},
];
let peliPost90 = peliFav.filter(peli => peli.fecha > 1990);
let directores = peliFav.map(peli => peli.director);
let titulos = peliFav.map(peli => peli.titulo);
let listaDirTit = directores.concat(titulos);
let listaDirTit_2 = [...directores, ...titulos]; 
