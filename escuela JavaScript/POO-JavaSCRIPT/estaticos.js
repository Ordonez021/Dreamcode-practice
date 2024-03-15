class Mate{
    //este valor lo podemos modificar tenemos que colocarlo como constante o privado
    static #pi = 3.141592
    static get PI(){
        return this.#pi;
    }

    static suma(a,b){
        return a + b;
    }
}

console.log(Mate.PI);

console.log(Mate.suma(2,5));
