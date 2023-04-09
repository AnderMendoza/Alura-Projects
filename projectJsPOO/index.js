//Definicion de clases
class Cliente
{
	nombreCliente;
	dniCliente;
    rucCliente;
}

class CuentaCorriente
{
    numero;
    saldo;
    agencia;

    constructor() {
        this.saldo = 0;
        this.numero = 1234;
        this.agencia = "BCP";
    }

    depositoEnCuenta(valor) {
        this.saldo += valor;
    }

    retirarDeCuenta(valor) {
        this.saldo -= valor;
    }
}

cuentaDeLeonardo = new CuentaCorriente();

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo);