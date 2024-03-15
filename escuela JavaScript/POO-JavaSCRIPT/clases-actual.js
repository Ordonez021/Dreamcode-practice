//plantilla o molde 
class Persona{
    sexo;
    etnia;
    /**
     * PROPIEDADES
     * @param {*} nombre return nombre
     * @param {*} edad returna edad
     */
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    /**
     * METODOS
     */
    imprimir(){
        console.log(`${this.nombre} ${this.edad}`);
    }
}

const p1 = new Persona('mao',23);

console.log(p1)
p1.imprimir();