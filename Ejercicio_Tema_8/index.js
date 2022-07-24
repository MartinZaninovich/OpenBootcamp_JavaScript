function sinParametros() {
    return true
}



async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

damePromesa()



function* generarIdPares() {
    let id = 0
    while(true) {
        id += 2
        if(id === 20) {
            return id
        }
        yield id
    }
}

const genIdPar = generarIdPares()

console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
console.log(genIdPar.next().value);
