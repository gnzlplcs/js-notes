/*
  EXAMPLE 2
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mascotas = [
  { nombre: "Puchini", edad: 12, raza: "Perro" },
  { nombre: "Chanchito feliz", edad: 3, raza: "Perro" },
  { nombre: "Pulga", edad: 10, raza: "Perro" },
  { nombre: "Pelusa", edad: 16, raza: "Gato" },
];

const numerosFiltrados = numeros.filter(num => num < 5);

console.log(numerosFiltrados); // [1, 2, 3, 4]

const perros = mascotas.filter(item => item.raza === 'Perro');
const gatos = mascotas.filter(item => item.raza === 'Gato');

console.log(perros);
/* [
  { nombre: 'Puchini', edad: 12, raza: 'Perro' },
  { nombre: 'Chanchito feliz', edad: 3, raza: 'Perro' },
  { nombre: 'Pulga', edad: 10, raza: 'Perro' }
] */

console.log(gatos); // [ { nombre: 'Pelusa', edad: 16, raza: 'Gato' } ]