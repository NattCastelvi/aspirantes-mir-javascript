function join(arreglo) {
    
    var resultado = '';

    for (var i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i];
        if (i !== arreglo.length - 1) {
            resultado += ' ';
        }
    }
    return resultado;
}
console.log (join([1,2,3]))

console.log (join([4,5,6,7,8]))

console.log (join([10,12,13,14,15]))

