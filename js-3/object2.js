var persona = {
    nombre: "Natalia",
    edad: 27,
    ciudad: "Bogotá",
    profesion: "Docente",
};

console.log(persona);

function presentacion(objetoPersona){
    return "Hola, soy " + objetoPersona.nombre + ", tengo "+ objetoPersona.edad + " años y vivo en " + objetoPersona.ciudad + ". Me gusta: ";
}

var mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["leer", "tocar bateria", "bailar"];
console.log(persona.hobbies);

for (var i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}