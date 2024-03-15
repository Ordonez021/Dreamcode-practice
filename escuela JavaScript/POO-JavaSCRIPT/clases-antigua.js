//plantilla o molde 
function Persona(nombre,edad){
    this.nombre = nombre,
    this.edad = edad

    this.imprimir = function(){
        console.log(`${this.nombre} ${this.edad}`);
    }
}

//objeto 
const p1 = new Persona('mao',23);
const p2 = new Persona('Roel',34);

console.log(p1.nombre);
console.log(p2.nombre);

p1.imprimir();
p2.imprimir();