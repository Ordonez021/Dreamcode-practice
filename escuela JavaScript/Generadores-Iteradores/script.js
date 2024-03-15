/*
function * contar() {
    console.log(`DEntro del generador: ${1} `);
    yield 'UNO';
    console.log(`DEntro del generador: ${2} `);
    console.log(`DEntro del generador: ${yield 7} `);
}

const iterador = contar();
const valor1 = iterador.next();    
console.log(valor1);
const valor2 = iterador.next();    
console.log(valor2);
const valor3 = iterador.next('ABC');    
console.log(valor3);


function * conteinfinito() {
    let n = 0;
    while(true){
        yield console.log(n)
        n += 1;
    }
}
const it = conteinfinito();
it.next();
class Mascota{
    constructor(nombre,edad,raza,tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.tipo = tipo;
    }
    infomascota(){
        console.log(`su nombre es: ${this.nombre}`)
        console.log(`su edad es: ${this.edad}`)
        console.log(`su raza es: ${this.raza}`)
        console.log(`su tipo es: ${this.tipo}`)
    }
}


class Perro extends Mascota{
    constructor(nombre,edad,raza,volumenladrido){
        super(nombre,edad,raza,'perro'),
        this.volumenladrido = volumenladrido;
    }
    ladrar(){
        console.log(`El perros ${this.nombre} ha ladrado con un volumen de ${this.volumenladrido}`);
    }
    get name(){
        return this.volumenladrido;
    }
    
}
class Gato extends Mascota{
    constructor(nombre,edad,raza,color){
        super(nombre,edad,raza,'gato'),
        this.color = color;
    }
}


let perro1 = new Perro('mao',23,'canino', 'muy fuerte');
// perro1.infomascota();
perro1.name;

let gato1 = new Gato('apolo',26,'saens','black');
gato1.infomascota();
*/



class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    get area(){
        return this.ancho * this.alto;
    }
    set dimensiones(obj){
        console.log("se cambio las dimensiones ",obj)
        this.ancho = obj.x;
        this.alto = obj.y;
    }
}

const are1 = new Rectangulo(12,2);
are1.dimensiones = {
    x: 2,
    y: 5,
}
console.log(`al area es de ${are1.area}`)

export default{ Rectangulo };