function login() {
    let miUsuario = document.getElementById('txtUsuario').value;
    let miPass = document.getElementById('txtContrasena').value;

    try {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: miUsuario,
                pass: miPass
            })
        })
        .then(response => response.text())
        .then(data => {
            if(data === ""){
                alert('login incorrecto wachin');
            }else{
                //tenemos que guardar el token recivido para poderlo utilizarlo a lo largo de la sesiom
                localStorage.setItem('token', data);
                window.location.href = "page.html"
               
                
            }
        })
        .catch(error => {throw new Error('error en la solicitud', error)});
    } catch (error) {
        console.error(error);
    }
    
}


function validar(name) {
    const token = localStorage.getItem('token');
    try {
        fetch('http://localhost:3000/validate',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                permiso: name
            })
        })
        .then(response => response.text())
        .then(data => {
            if(data === ""){
                alert("el usuario no tiene acceso a la pagina")
            }else{
                window.location.href = data;
            }
        })
        .catch(error => {throw new Error('error en la solicitud' + error);})
    } catch (error) {console.error(error);}
}