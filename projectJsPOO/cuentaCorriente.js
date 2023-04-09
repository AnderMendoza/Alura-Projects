export class cuentaCorriente {
    //variables -> atributos
    numero;
    #saldo;
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = 1234;
        this.agencia = "BCP";
    }

    //metodos
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