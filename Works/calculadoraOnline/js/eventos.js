let elementoSuma = document.getElementById("primerNumero");
let elementoSuma2 = document.getElementById("segundoNumero");
let elementoresul = document.getElementById("resultado");

function mostraResultado(result){
    elementoresul.value = result;

}
function suma(){

    mostraResultado(+elementoSuma.value + +elementoSuma2.value);
        
}
function resta(){
    let resultado = parseFloat(+elementoSuma.value - +elementoSuma2.value);
    elementoresul.textContent = "muy facil " + resultado  +" duban es gay";

}

let elementoHora = document.getElementById("textoAlarma");
function comenzarReloj() {
    setInterval(tictac, 1000)
}

function tictac() {
    let date = new Date();
    let hora = date.getHours();
    let minu = String(date.getMinutes()).padStart(2,"0");
    let second = String(date.getSeconds()).padStart(2, "0");

    let horafinal = hora + " : " + minu + " : " + second;

    elementoHora.textContent = horafinal;
}