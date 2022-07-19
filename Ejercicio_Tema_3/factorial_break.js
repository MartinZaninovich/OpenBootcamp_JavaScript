// Calculando el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 10
let i = factorial;

while (true) {
    console.log(i)
    factorial = factorial * (i - 1);
    if (i === 1) {
        break;
    }
    console.log(factorial);
    i--;
}
