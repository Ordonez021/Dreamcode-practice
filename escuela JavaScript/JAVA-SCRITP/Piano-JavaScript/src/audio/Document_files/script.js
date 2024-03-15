const myPage = (()=>{
    'use strict'
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach( boton => {

        boton.addEventListener('click', (evento)=>{
            var buttonQueleDeClick = evento.target;
            var datoQueObtengo = buttonQueleDeClick.dataset.note;

            var audio = document.getElementById(`audio${datoQueObtengo}`);
            audio.pause();
            audio.currentTime = 0;
            audio.play();
            
        });
    });

})();

// const teclado = document.getElementById('teclado');

// teclado.addEventListener('keydown', (event)=>{
//     console.log(event.key)
// })
document.addEventListener('keypress',(event)=>{
    console.log(event)
})