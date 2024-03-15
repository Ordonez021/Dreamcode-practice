fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'DELETE'
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("algo no salio bien",error));