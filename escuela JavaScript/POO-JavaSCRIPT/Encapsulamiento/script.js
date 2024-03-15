/**
 * CREAR PROPIEDADES PRIVADAD O ATRIBUTOS QUE  LE COLOQUEMOS METODOS PARA MODIFICAR 
 * NO SE PUEDEN LLAMAR DESDE EL EXTERIOR
 */
//NUMERAL PARA DECIR QUE ES PRIVADA
class Persona{
    #nombre;
    #edad;
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#mostrarAlgo();
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }
    get getNombre(){
        return this.#nombre;
    }
    set setEdad(edad){
        this.#edad = edad;
    }
    get getEdad(){
        return this.#edad;
    }


    #mostrarAlgo(){
        console.log('metodo privado');
    }

}

const p1 = new Persona('alex',23);
console.log(p1);
p1.setNombre = 'Roel';
console.log(p1);