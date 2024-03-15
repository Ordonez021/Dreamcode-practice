const button = document.querySelector('#buttonRandom')
button.addEventListener('click', fetchDogImage)

function fetchDogImage() {
    axios.get('https://random.dog/woof.json')
    .then(response => {    
        const urlIMG = response.data.url;
        const contenido = document.getElementById('contenido');
        contenido.innerHTML = `<p> src="${urlIMG}"</p>`
    })
    .catch(function (error) {
        // manejar error
        console.log(error);
    })
}

fetchDogImage();    