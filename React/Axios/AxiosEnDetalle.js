let dato = {
    title: 'nuevo Post',
    body: 'mi contenido'
}
//utilizamos el axios.post tambien se puede utiolizar axios.get / axios.put / axios.patch
axios.post('https://jsonplaceholder.typicode.com/posts', dato)
.then(respueta => console.log("post fue creado con exito",respueta.data))
.catch(error => console.error("el post tubo un error",error));