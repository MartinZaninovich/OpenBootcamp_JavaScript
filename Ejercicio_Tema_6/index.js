let listaCompras = ["harina", "azúcar", "leche", "pan", "carne"];
listaCompras.push("aceite de girasol");  // Añadiendo "aceite de girasol"
listaCompras.pop("aceite de girasol");   // Eliminando "aceite de girasol"

let peliFav = [
    {titulo: "Terminator 2", director: "James Cameron", fecha: new Date(1991, 7, 8)},
    {titulo: "Tiburón", director: "Steven Spielberg", fecha: new Date(1975, 6, 31)},
    {titulo: "Manhattan", director: "Woody Allen", fecha: new Date(1980, 4, 22)},
];
let peliPost90 = peliFav.filter(peli => peli.fecha > new Date(1900, 0, 1));
let directores = peliFav.map(peli => peli.director);
let titulos = peliFav.map(peli => peli.titulo);
let listaDirTit = directores.concat(titulos);
let listaDirTit_2 = [...directores, ...titulos]; 
