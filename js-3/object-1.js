var pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    estatura: 1.8,
    saluda: function() {
        return "Hola, me llamo " + this.nombre;
    }

};

delete pedro.activo;

for (var key in pedro) {
    console.log(key + ": " + pedro[key]);
}

console.log(pedro.nombre);
console.log(pedro.saluda());
