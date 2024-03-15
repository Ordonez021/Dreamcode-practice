//plantilla o molde 
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    /**
     * METODOS
     */
    detallePersona(){
        console.log(`Nomrbe: ${this.nombre},\n Edad: ${this.edad}`);
    }
}

    /**
     * HEREDAR LAS PROPIEDADES DE LA CLASE
     */
class Empleado extends Persona{
    sueldo;
    constructor(nombre,edad,sueldo){
        super(nombre,edad);
        this.sueldo = sueldo;
    }
    detallePersona(){
        super.detallePersona();
        console.log('sueldo: ', this.sueldo);
    }
}

const Em1 = new Empleado('mao',23,34.43);

console.log(Em1)

Em1.detallePersona();