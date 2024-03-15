//Socke protocolo de comuniacion de tiempo real de javascriopt 

let audio = document.getElementById("audio");
let listaMusicas = document.getElementById("listaMusica")


listaMusicas.addEventListener('change', cambiarCancion);

function cambiarCancion() {
    let valorCancion = listaMusicas.value;
    audio.src = valorCancion;
    audio.play();
    let evento = new CustomEvent('cambioCancion');
    audio.dispatchEvent(evento);
}

audio.addEventListener('cambioCancion', function () {
    console.log("cancion actual: " + listaMusicas.value)
})













// let Socke = new WebSocket('ws://localhost:8080');

// let msmEntrada = document.getElementById("mensajeIngresado");
// let msmEviar = document.getElementById("botonEnviar");

// function mostrarMensajes(contenido){
//     let contendorDivMensaje = document.getElementById("chat");

//     let paraMostrarMensaje = document.createElement('p');
//     paraMostrarMensaje.innerText = contenido;

//     contendorDivMensaje.appendChild(paraMostrarMensaje);
// }

// msmEviar.onclick = function(){
//     let mensaje = msmEntrada.value;
//     mostrarMensajes(mensaje);
//     socket.send(mensaje);
// }
// // onmessage es una funcion que recive le mensjae
// socket.onmessage = function(event){
//     let mensaje = event.data;
//     mostrarMensajes(mensaje);
// };