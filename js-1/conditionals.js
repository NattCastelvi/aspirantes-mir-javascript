function sum(numero) {
    let resultado = 0;
    for (let i = 1; i <= numero; i++) {
        resultado += i;
    }
    return resultado;
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120
function calcularColor(num) {
    var color;
    if (num === 1) {
      color = "negro";
    } 
    else if (num === 2) {
      color = "blanco";
    } 
    else if (num === 3) {
      color = "azul";
    } 
    else {wa
      color = "verde";
    }

    return "El color es " + color;
  }

  // código de prueba
  console.log(calcularColor(1)) // "El color es negro"
  console.log(calcularColor(2)) // "El color es blanco"
  console.log(calcularColor(3)) // "El color es azul"
  console.log(calcularColor(8)) // "El color es verde"