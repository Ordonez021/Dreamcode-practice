//necesitamos crear una funcion  que llame a la funcion (crearParrafosTienda) cuantas veces la necesitemos 
function crearTiendas(contenedorID, min, cantidadTiendas) {
    let elementoIds = document.getElementById(contenedorID);

    for (let contTiendas = 1; contTiendas <= cantidadTiendas; contTiendas++) {
        let textoEtiqueta = "Tienda " + contTiendas;

        let crearParrafoTienda = crearParrafosTienda(textoEtiqueta,min);

        elementoIds.appendChild(crearParrafoTienda); 
    }
}

function crearParrafosTienda(textolabel, min) {

    let elementoP = document.createElement("p");

    let elementoLabel = document.createElement("label");
    elementoLabel.innerText = textolabel + ": "; //EROASROAORJROAROIAOIPASRAROIPAROPIAROPRSOPRIS

    elementoLabel.setAttribute("for", textolabel);

    let elementoInput = document.createElement("input");

    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textolabel);
    elementoInput.setAttribute("min", min);
    elementoInput.setAttribute("value", 0);  

    //agregar label y input al parrafo

    elementoP.appendChild(elementoLabel);
    elementoP.appendChild(elementoInput);
    //devolver parrafo completo
    return elementoP;

}





function extraerValorElemento(elemento) {
    let elementos = Number(elemento.value);
    return elementos;
}


function calcular() {
    let ventas  = [];
    let contador = 0;
    let ventasArreglo = document.getElementById("idTiendas");

    for(let item of ventasArreglo.children){
        let valorIngresado = extraerValorElemento(item.children[1]);
        ventas[contador] = valorIngresado;
        contador++;
    }

    let totalVentas = sumaTotal(ventas);
    let ventamayor = ventaMayor(ventas);
    let ventamenor = ventaMenor(ventas);

    for( let item of ventasArreglo.children){
        let valorIngresado = extraerValorElemento(item.children[1]);
       
        item.children[1].className = "inputNeutro"

        if(valorIngresado == ventamayor){
            item.children[1].className = "inputMayor";
        }

        if(valorIngresado == ventamenor){
            item.children[1].className = "inputMenor";
        }
    }


    let mensaje = "total ventas = " + totalVentas;

    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensaje;
}

function sumaTotal(array) {
    let total = 0;

    for(let ventas of array){
        total += ventas;
    }
    return total;
}

function ventaMayor(array){

    let mayor = array[0];
    for(let venta of array){
        if(venta > mayor)
            mayor = venta;
    }
    return mayor;

}

function ventaMenor(array) {
    
    let menor = array[0];
    for(let venta of array){
        if(venta < menor)
            menor = venta;
    }
    return menor;


}