class Operacion {
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    constructor (){
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
    }
    set valorA(value:number){
        this.valorA=value;
    }
    set valorB(value:number){
        this.valorB=value;
    }
get Resultado():number{
    return this.resultado;
}
}

class Suma extends Operacion{
    Sumar(){
        this.resultado=this.valorA+this.valorB;
    }
}

class Resta extends Operacion{
    Restar(){
        this.resultado=this.valorA-this.valorB;
    }
}

let operacionS= new Suma();
operacionS.valorA=45;
operacionS.valorB=10;
operacionS.Sumar();
console.log("El resultado de la suma es" + operacionS.resultado);

let operacionR= new Resta();
operacionR.valorA=45;
operacionR.valorB=10;
operacionR.Restar();
console.log("El resultado de la resta es" + operacionS.resultado);


