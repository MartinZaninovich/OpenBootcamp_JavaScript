const arrayFibonacci = []
let res = 0;
let num1 = 0;
let num2 = 1;

function secuenciaFibonacci(cantidadDeNumeros) {
    for(let i = 1; i < cantidadDeNumeros; i++) {
        if (i === 1) {
            arrayFibonacci.push(num2)
        } 
        res = num1 + num2
            arrayFibonacci.push(res)
        num1 = num2
        num2 = res
    }
    return arrayFibonacci
}

secuenciaFibonacci(6)
console.log(arrayFibonacci)


