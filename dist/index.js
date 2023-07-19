"use strict";
const miNombre = "laura";
const miNumeroFavorito = 8;
const nombresAnimales = [
    "León",
    "Tigre",
    "Elefante",
    "Jirafa",
    "Cebra",
    "Oso",
    "Lobo",
    "Delfín",
    "Tortuga",
    "Pingüino",
];
const organizacion = {
    nombre: "Mi Organización",
    slogan: "Innovando juntos",
    cantidadTrabajadores: 100,
    horarioAtencion: "9:00 AM - 6:00 PM",
    trabajoRemoto: true,
    fechaCreacion: new Date(7, 3, 2021),
    trabajaSabados: false,
};
const estudiantes = [
    { nombre: "Estudiante 1", edad: 20, curso: "Matemáticas" },
    { nombre: "Estudiante 2", edad: 21, curso: "Historia", direccion: "Calle Principal 123" },
    { nombre: "Estudiante 3", edad: 19, curso: "Ciencias" },
];
function calcularAreaCirculo(radio) {
    const area = Math.PI * radio * radio;
    return area;
}
function obtenerMayor(a, b, c) {
    return Math.max(a, b, c);
}
function saludar(nombre) {
    console.log(`Hola, soy laura`);
}
console.log(miNombre);
console.log(miNumeroFavorito);
console.log(nombresAnimales);
console.log(organizacion);
console.log(estudiantes);
console.log(calcularAreaCirculo(5));
console.log(obtenerMayor(10, 5, 8));
saludar("laura");
