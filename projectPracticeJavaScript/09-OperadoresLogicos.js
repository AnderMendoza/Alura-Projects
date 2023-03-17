// Operadores de comparacion

const valorPasaje = 1000;

if (valorPasaje === 1000) {
    console.log("El pasaje vale 1000");
}

const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

// Palabra reservada if 
// evalua una condicion



// Operadores logicos
// Y (AND) - O (OR) - NO (NOT)
// AND = &&  Se debe cumplir las dos condiciones
// OR = ||   Se debe cumplir una condicion al menos
// NOT = !   No se cumple la condicion
let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) &&
    (edadPasajero >= 18 || estaAcompanado)) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las reglas");
}

edadPasajero = 17;
estaAcompanado = false;
// Aplicando logica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) &&
    (edadPasajero >= 18 || estaAcompanado))) {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las reglas");
} else {
    console.log("Pasaje disponible para venta");
}