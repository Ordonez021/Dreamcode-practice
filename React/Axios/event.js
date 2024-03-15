/*function obtenerInformacion() {
// Crear una nueva instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Especificar el método HTTP y la URL del archivo JSON
xhr.open('GET', 'index.json', true);

// Configurar la función de devolución de llamada cuando se complete la solicitud
xhr.onload = function() {
  // Verificar si la solicitud fue exitosa (código de estado 200)
  if (xhr.status >= 200 && xhr.status < 400) {
    // Analizar el contenido JSON de la respuesta
    var data = JSON.parse(xhr.responseText);
    
    // Acceder a los datos del JSON y mostrar un dato específico
    alert(data.countries);
  } else {
    // La solicitud no fue exitosa, manejar el error
    console.error('Error al cargar el archivo JSON');
  }
};

// Configurar la función de devolución de llamada en caso de error
xhr.onerror = function() {
  console.error('Error de red al intentar cargar el archivo JSON');
};

// Enviar la solicitud

xhr.send();
*/
    axios.get('index.json')
    .then(function(respuesta){
        let capturarUl = document.getElementById('miLista');
        for(let i=0; i < respuesta.data.length; i++){
            let crearLi = document.createElement('li');
            crearLi.innerText = respuesta.data[i].url;
            capturarUl.appendChild(crearLi);
        }
    })
    .catch(error => console.error("algo salio mal",error))
