var carro={
    color:"blanco",
    marca: "Nissa",
    imprimir:function(){
        var salida = this.marca + " " + this.color;
        return salida;
    }


}

// console.log(carro.imprimir());

var logCarro = function( arg1, arg2){
    console.log("carro: ", this.imprimir);

}
var nuevoLogCarro = logCarro.bind( carro );

nuevoLogCarro();