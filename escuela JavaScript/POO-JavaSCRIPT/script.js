const persona = {
    nombre: 'alex',
    apellido: 'pepe',
    correo: 'mnb@gmail.com',
    edad: 26,

    nombreCompleto(){
        return `${this.nombre} ${this.apellido} ${this.edad}`
    },
    //podemos agregar una lista 

    traje : ['traje1','traje2','traje3'],
    
    direccion: {
        zip: '12233',
        calle: 'siempre viva',
        tel: '3154609358'
    }
}
console.log(persona.edad);
console.log(persona.nombreCompleto());
console.log(persona.traje);
console.log(persona.direccion.zip);
