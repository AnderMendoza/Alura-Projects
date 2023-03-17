// TIPOS DE DATOS
// ALFANUMERICOS
let nombrePasajeroPrimero = "Ramon Silva";
nombrePasajero = "Ramos Silva";

// NUMERICO
let valorBoleto = 1000;
const impuestoAeropuerto = 100; 
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

// LOGICOS (true, false)
let boletoActivo = true;

// OPERACIONES ARITMETICAS
// SUMA
let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;

// ORDEN DE PRECEDENCIA
// ()
// * y /
// + y -
let totalBoletosForma2 = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto);
console.log(totalBoletosForma2);


//Concatenación de texto
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseFloat('1000') + parseInt('12');
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);