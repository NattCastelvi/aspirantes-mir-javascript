var numero = 10;

function sum(numero) {
    return (numero * (numero + 1) / 2);
}

function sum2(num) {
    i = 1
    su = 0
    while (i <= num) {
        su = su + i
        i++
    }
    return su
}

console.log(sum(numero), sum2(numero));
numero = 4
console.log(sum(numero), sum2(numero));
numero = 15
console.log(sum(numero), sum2(numero));
numero = 22
console.log(sum(numero), sum2(numero));