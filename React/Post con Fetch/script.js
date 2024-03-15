// funcion para agregar un registro a una api con dos parametros que son los que se van a ingresar

async function crearPost(titulo,contenido) {

    //creamos el try catch para evitar algun tipo de error

    try {
        //creamos una variable que contenda lo que vamos a ingreasar 
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId: 1,
            })
        })
        //si la respuesta es falsa crear throw
        if (!respuesta.ok) {
            throw new Error("error en la peticion", respuesta);
        }

        let data = await respuesta.json();
        console.log("registro creado ", data)

    } catch (error) {
        console.error("algo salio mal a la hora del registro",error)
    }
    
}

//lamamos a la funcion para ingresar el registro
crearPost("hola", "como asvas")


//otra opcion es

function crearPosts(nombre, dato) {
    fetch('url,json',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: nombre,
            body: dato,
            userId: 1
        })
    })
    .then(respuesta => respuesta.json())
    /*
     * .then( data => function(){

     })
     */
    .then( data => console.log(data))
    .catch(function(error){
        console.error("algo no salio como esperaba",error);
    })
}

