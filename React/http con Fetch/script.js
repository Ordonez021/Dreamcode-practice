fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'PUT',
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({
        title: 'nuevo titulo',
        body: 'Nueva Description'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("algo no salio bien",error));