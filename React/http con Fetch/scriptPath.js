fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'PATCH',
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({
        title: 'nuevo titulo',
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("algo no salio bien",error));