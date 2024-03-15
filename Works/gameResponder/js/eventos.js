let tiempoTerminado;


let intervaloTiempo;


function comenzarCuentaRegresiva() {
    tiempoTerminado = setTimeout(tiempoCumplido, 30000);
    intervaloTiempo = setInterval(ticTac , 1000);

    document.getElementById("cuentaRegresiva").textContent = 30;
}


function ticTac() {
    let tiempo = document.getElementById("cuentaRegresiva").textContent;

    document.getElementById("cuentaRegresiva").textContent = tiempo - 1;
}

function tiempoCumplido() {
    clearInterval(intervaloTiempo);
    document.getElementById("cuentaRegresiva").textContent = 0;
    document.getElementById("audioFinal").play();
    alert("Se termino tu tiempo. Vuelve a intentarlo");
}


function finalizado() {
    clearTimeout(tiempoTerminado);
    clearInterval(intervaloTiempo);

    let fecha = new Date();

    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta3 = document.getElementById("respuesta2").value;
    let respuesta2 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;
    let respuesta5 = document.getElementById("respuesta5").value;

    let mensaje = fecha.toLocaleDateString("es-Es");

    let mensajeFinal = fecha.toLocaleDateString("es-Es") + " \n"
    + "1. " + respuesta1 + "\n" +
    + "2. " + respuesta2 + "\n" +
    + "3. " + respuesta3 + "\n" +
    + "4. " + respuesta4 + "\n" +
    + "5. " + respuesta5 
    alert(mensajeFinal);
}
function reIntentar(){

    location.reload();
}