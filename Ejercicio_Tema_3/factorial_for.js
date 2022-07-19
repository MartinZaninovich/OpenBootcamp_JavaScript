// Calculando el factorial de 10 utilizando un solo bucle for

let factorial = 10;

for (let i = factorial; i > 1; i--) {
    console.log(i)
    factorial = factorial * (i - 1);
    console.log(factorial);
}