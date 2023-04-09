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
    #saldo;
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = 1234;
        this.agencia = "BCP";
    }

    depositoEnCuenta(valor) {
        if (valor > 0) {
        this.#saldo += valor;
        }
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
    }
}

cuentaDeLeonardo = new CuentaCorriente();

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(-10);
console.log(cuentaDeLeonardo);