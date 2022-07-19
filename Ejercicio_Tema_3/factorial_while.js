// Calculando el factorial de 10 utilizando un bucle while

let factorial = 10
let i = factorial;

while (i > 1) {
    console.log(i)
    factorial = factorial * (i - 1);
    console.log(factorial);
    i--;
}

