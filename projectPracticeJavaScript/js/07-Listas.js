const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Definicion de una lista con tipos de datos alfanumericos
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");

// Definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina"];


paisesDisponibles.push("Uruguay");
ciudadesDisponibles.push("Montevideo");

paisesDisponibles.unshift("Ecuador");
ciudadesDisponibles.unshift("Quito");

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

// Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

paisesDisponibles.splice(1,2,"Venezuela", "Paraguay");
console.log(paisesDisponibles);