
function Calcular() {
    let numero = parseInt(document.getElementById("cantidadIngresada").value);
    if (isNaN(numero)){
        alert("Debes llenar la casilla")
        return;
    }else{
        let textoResultado = document.getElementById("resultado");
        let totalCombustible = (numero * 55) / 750;
    
        textoResultado.innerHTML = "Necesitas " + totalCombustible + " litros";    
    }
    reiniciar();
}
function reiniciar() {
    location.reload();
}