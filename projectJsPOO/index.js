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
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}

cuentaDeLeonardo = new CuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual es: " + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log("El saldo actual es: " + saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log("El saldo actual es: " + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log("El saldo actual es: " + saldo);