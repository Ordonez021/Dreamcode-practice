//declaramos varibales que contiene el usuario y la contraseña
let usuario = 'federico';
let password = 'mao';

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET',
    credentials: 'include',

    //tipos cache ==> 'default' / 'no-cache'(navegador realiza una solicitud al servidor)
    // 'no-store'(no la almacena en el cache)
    // 'reload'(forza a descargar el recurso del dervidor )
    //'force-cache' (hace la copia sin importar al servido )
    //'only-if-cached' (solo hace la copia si hay una copia en el cache)
    cache: 'default',
    redirect: 'manual', //tambien se puede (follow/error) 
    headers: {
        //dos tipos de autorizaciones dependiendo de cada sitio 
        //dos populares ==> Basic / Bearer
        /**
         * let token = 'mitoken'
         * Funciona con tokens
         * 'authorization': 'Bearer' + token,
         * 
         */
        'authorization': 'Basic' + btoa(usuario + ':' + password),
        'Content-Type': 'application/json'
    }
})
.then(respuesta => {
    if(respuesta.type === 'opaqueredirect'){
        let nuevaUrl = respuesta.headers.get('location');
        console.log("redirigiendo a: ", nuevaUrl);
    } else{
        respuesta.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error("algo no salio bien",error));