class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    } 
    set saldo(valor){
        this._saldo = valor;
    }  

    sacar(valor){
        if(valor > this._saldo){
            return "operação negada"

        }
        this._saldo = this._saldo - valor;

        return this._saldo ;
    }

    depositar(valor){
        this._saldo =  this._saldo + valor;
        return this._saldo ;
    }
 };

 class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCreito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCreito = cartaoCreito;
    }

    get cartaoCreito(){
        return this._cartaoCreito

    }
    set cartaoCreito(valor){
        this._cartaoCreito = valor;
    }
 };
 class ContaPoupanca  extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
        
    }

 };
 class ContaUniversitaria  extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
        
    }
    sacar(valor){
        if(valor > 500){
            return 'operação negada'
        }
        this._saldo = this._saldo - valor;
    }
 };