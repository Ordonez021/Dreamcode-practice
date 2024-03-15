const imgplayerChoise = document.getElementById('player-choice'),
      imgcomputerChoise = document.getElementById('computer-choice'),
      Parraforesultado = document.getElementById('resultado'),
      Parrafoscore = document.getElementById('score'),
      allbuttons = document.querySelectorAll('button');
//arra con los datos para la eleccion de la computadora
const choices = ['piedra', 'papel', 'tijera'];
//objeto con la eleccion para cambiar la imagen
const fileNames = {
    'piedra': 'img/rock.jpg',
    'papel': 'img/paper.jpeg',
    'tijera': 'img/scissors.png',
}
let positiveStore = 0;
let negativeStore = 0;
allbuttons.forEach( button => button.addEventListener('click', event =>{
    // en ves de tarjet para que no se confunda entre el boton y la imagen utilizamos currentTarjet
        //aqui se determina la eleccion del jugador
        const  button = event.currentTarget;
        //con dataset elegimos el id que le colocamos al botton
        const playChoice = button.dataset.choice;
        /**
         * determinar eleccion de la computadora
         */
        let computerChoice = getComputerChoise();
        /**
         * determinar quien gana
         */
        //una funcion con dos parametros que me devuelva verdadero o false si la eleccion del jugador gana o no
        const winner = getWinner(playChoice , computerChoice);
        imprimirElGanador(winner,playChoice,computerChoice);
      
        /**
         * CAMBIAR LAS IMAGENES DEPENDIENDO LA ELECCION
         */
        imgplayerChoise.setAttribute('src',fileNames[playChoice])
        imgcomputerChoise.setAttribute('src',fileNames[computerChoice])
        /**
         * IMPRIMIR EL RESULTADO EN LA PAGINA 
         */
 
     })
)
function getComputerChoise(){
    //obtener valor aleatorio y devolverlo lo que tenemos que hacer es crear unn arreglo
    const i = Math.floor(Math.random() * 3);
    return choices[i];
}
function getWinner(playChoice , computerChoice){
    
    if(playChoice === computerChoice){
        return 'empate';
    }
    if(playChoice === 'piedra'){
        if(computerChoice === 'papel'){
            return 'computer';
        }else{ //si no es papel es tijera
            return 'player'
        }
    }else if( playChoice === 'papel'){
        if(computerChoice === 'piedra'){
            return 'player';
        }else{ //si no es papel es tijera
            return 'computer'
        }
    }else{
        if(computerChoice === 'papel'){
            return 'player'
        }else{
            return 'computer'
        }
    }
}
function imprimirElGanador(winner, playChoice, computerChoice){
        let result;
        if(winner === 'player'){
            result = 'ganaste'
            ++positiveStore;
            
        }else if (winner === 'computer'){
            result = 'perdiste'
            ++negativeStore;
            if(negativeStore == 3){
                alert('perdiste')
            }
        }else{
            result = 'empatas'
        }
        Parraforesultado.innerHTML = `Tú ${result} con ${playChoice} en contra de ${computerChoice}`;
        
        Parrafoscore.innerHTML = `ganadas: ${positiveStore} perdidas: ${negativeStore}`

    
}