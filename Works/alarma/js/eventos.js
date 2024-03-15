// function Evento() {
//     let elementoNombre = document.getElementById("nombreIngresado");
//     let elementoSalida = document.getElementById("salida");
//    let mensaje = "tu te llamas " + elementoNombre.value;
//    elementoSalida.textContent = mensaje;


// }

let elementoSegundos = document.getElementById("datoIngresado");
let elementoH1 = document.getElementById("textoAlarma");
let elementoSonidoAlarma = document.getElementById("audioAlarma");


function iniciarConteo() {
    setTimeout(tiempoFinalizado, 1000 * elementoSegundos.value );
}

function tiempoFinalizado(){
    elementoH1.style.color = "green";
    elementoSonidoAlarma.play();
}


function comenzarReloj() {
    setInterval(ticTac, 1000);
}

function ticTac() {
    let horaActual = new Date();

    let hora = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = String(horaActual.getSeconds()).padStart(2, "0");


    let horafinal = hora +" : " + minutos +" : " +  segundos;

    elementoH1.textContent = horafinal;
}

function mostrarFecha() {
    let fechaActual = new Date();
    alert(fechaActual.toLocaleDateString('es-ES'));
}