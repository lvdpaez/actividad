
const miNombre: string = "laura";


const miNumeroFavorito: number = 8;

const nombresAnimales: string[] = [
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


interface Organizacion {
  nombre: string;
  slogan: string;
  cantidadTrabajadores: number;
  horarioAtencion: string;
  trabajoRemoto: boolean;
  fechaCreacion: Date;
  trabajaSabados?: boolean;
}

const organizacion: Organizacion = {
  nombre: "Mi Organización",
  slogan: "Innovando juntos",
  cantidadTrabajadores: 100,
  horarioAtencion: "9:00 AM - 6:00 PM",
  trabajoRemoto: true,
  fechaCreacion: new Date(7,3,2021),
  trabajaSabados: false,
};


interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion?: string;
}

const estudiantes: Estudiante[] = [
  { nombre: "Estudiante 1", edad: 20, curso: "Matemáticas" },
  { nombre: "Estudiante 2", edad: 21, curso: "Historia", direccion: "Calle Principal 123" },
  { nombre: "Estudiante 3", edad: 19, curso: "Ciencias" },
];


function calcularAreaCirculo(radio: number): number {
  const area = Math.PI * radio * radio;
  return area;
}

function obtenerMayor(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}

function saludar(nombre: string): void {
  console.log(`Hola, soy laura duque`);
}

console.log(miNombre);
console.log(miNumeroFavorito);
console.log(nombresAnimales);
console.log(organizacion);
console.log(estudiantes);
console.log(calcularAreaCirculo(5));
console.log(obtenerMayor(10, 5, 8));
saludar("Juan");
