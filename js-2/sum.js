function suma2 (arreglo){
 var suma = 0

 for (var i = 0; i < arreglo.length; i ++) {
    suma += arreglo[i];
 }
 return suma;
}

console.log(suma2([1, 2, 3]));

console.log(suma2([1, 2, 4]));