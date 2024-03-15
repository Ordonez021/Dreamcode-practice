const myPage = (()=>{
    'use strict'
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach( button => {
        button.addEventListener('click', evento =>{
            var buttonQueleDeClick = evento.target;
            var datoQueObtengo = buttonQueleDeClick.dataset.note;

            var audio = document.getElementById(`audio${datoQueObtengo}`);
            audio.pause();
            audio.currentTime = 0;
            audio.play();
            
        });
    });
    document.addEventListener('keydown', event =>{
       const keys = event.key;
        const button = document.querySelector(`button[data-key="${keys}"]`);
        if(button){
            button.click();
        }
    })

})();

// const teclado = document.getElementById('teclado');

// teclado.addEventListener('keydown', event=>{
//     console.log(event.key)
// })
