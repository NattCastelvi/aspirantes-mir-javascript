var receta = {
    nombre: "Sandwich",
    ingredientes: [],
};

receta.ingredientes.push({nombre:"Pan", cantidad: 2});
receta.ingredientes.push({nombre: "Qqueso", cantidad:1});

console.log(receta.ingredientes[0].nombre);

var totalCantidad = 0;
for (var i = 0; i < receta.ingredientes.length; i++) {
    totalCantidad += receta.ingredientes[i].cantidad;
}

console.log("La cantidad total de ingresientes es: " + totalCantidad);