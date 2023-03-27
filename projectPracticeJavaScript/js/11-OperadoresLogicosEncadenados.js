const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

// A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 &&
    edadPasajero >= 18 && tienePasaporte && !estaCasado) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las reglas");
}