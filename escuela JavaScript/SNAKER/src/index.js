import Square from "./square";
import Snake from "./snake";

const myCanvas = document.getElementById('myCanvas');
const contex = myCanvas.getContext('2d');
 /**
 * CONSTANTE PARA AGREGAR LA POSICION DE LA SERPIENTE
 */
const snake = new Snake();

 const SIZE = 20;
                            
 let dx = 0;
 let dy = 0;
 let lastAxis;

//vamos a definir una variable food que va a cambiar su valor
//la declaramos con let y un valor vacio que es igual a null
//asignamos este valor en update ya que es ahi donde se carga los valores
let food = null;

setInterval(main, 100) //1000 = 1s

function main(){
    update(); //me actualize las variables
    draw(); //despues dibuja el objeto
}

function draw(){
    //da el fondo 
    contex.fillStyle = 'black';
    contex.fillRect(0 , 0 , myCanvas.width, myCanvas.height);
    //dibuja la headSnake
    drawObject(snake.headSnake, 'white');
    //darle color al body de la snake
    snake.bodySnake.forEach( elemento => drawObject(elemento, 'white'));
    //dibuja la food
    drawObject(food, 'red');
}

function drawObject(obje, color) {
    contex.fillStyle = color;
    contex.fillRect(obje.x, obje.y,SIZE,SIZE)
}   

function update() {
    const detectedCollision = checksnakeCollision();
    if(detectedCollision){
        gameOver();
        return;
    }
    let prevX, prevY;
    if(snake.bodySnake.length >=1){
        prevX = snake.bodySnake[snake.bodySnake.length-1].x;
        prevY = snake.bodySnake[snake.bodySnake.length-1].y;
    }else{
        //guardar la posicion en una variable
        prevX = snake.headSnake.x;
        prevY = snake.headSnake.y;
    }
   
    //hagamos un for para que la posicion siga al cuadradp
    for (let i=snake.bodySnake.length-1;  i >= 1; --i) {
        snake.bodySnake[i].x = snake.bodySnake[i-1].x;
        snake.bodySnake[i].y = snake.bodySnake[i-1].y;
    }
    if(snake.bodySnake.length >= 1){
        snake.bodySnake[0].x = snake.headSnake.x;
        snake.bodySnake[0].y = snake.headSnake.y;
    }

    //actualizar las cordenadas de la serpiente
    snake.headSnake.desplazamiento(dx,dy);
    //aqui tederminamos en que eje ha ocurrido el ultimo movimiento
    if(dx !== 0){
        lastAxis = 'X';
    }else if( dy !== 0 ){
        lastAxis = 'Y';
    }

    //detectar que la serpiente se topa con el alimento
    if(food && snake.headSnake.checkCollision(food)){
        //vuelve a valer null
        food = null;
        //aumentar el tamanño de la serpiente
        increaseSnakeSize(prevX,prevY);
    }

    //hacemos una condicion afirmando que si es nulo el valor se le asigne uno
    if(!food){
        food = ramdonFoodPosition();
    }
}

function ramdonFoodPosition() {
    let position;
    do{
        position = new Square( getRamdonX() , getRamdonY())
    }while(checkfoodCollision(position));
    return position;
}

function getRamdonY(){
    //el ancho del cuadrado canvas es de 460 y el tamaño del cuadro es de 20 se resta
   // 460 y lo que hacemos es dividir 460 entre 20 = 22
   //entonces tenemos que sacar un numero aleatorio entre 22 y multi.. por 20 
   return 20 * parseInt(Math.random() * 23);
}

function getRamdonX(){
    //el ancho del cuadrado canvas es de 400 y el tamaño del cuadro es de 20 se resta
    // 400 y lo que hacemos es dividir 380 entre 20 = 19
    //entonces tenemos que sacar un numero aleatorio entre 19 y multi.. por 20 
    return 20 * parseInt(Math.random() * 20);
}
function increaseSnakeSize(prevX,prevY) {
    snake.bodySnake.push(
       new Square(prevX, prevY)
    )
}

document.addEventListener('keydown', snakeMove);

function snakeMove(event) {
    switch (event.key) {
        case 'ArrowUp':
            //si dy ya obtine un valor al darle flecha arriba no se podra ir hacia abajo
            if(lastAxis !== 'Y'){
                dx= 0;
                dy= -SIZE;
            }
            break;
        case 'ArrowDown':
            if(lastAxis !== 'Y'){
                dx= 0;
                dy= +SIZE;
            }
            break;
        case 'ArrowRight':
            if(lastAxis !== 'X'){
                dx= +SIZE;
                dy= 0;
            }

            break;
        case 'ArrowLeft':
            if(lastAxis !== 'X'){
                dx= -SIZE;
                dy= 0;
            }
            break;
        default:
            break;
    }
}

function checkfoodCollision(position) {
    //comparar las cordenadas del alimento generado con el cuerpo de la serpiente
   if(snake.checkFullCollision(position))
    return false;
}

function checksnakeCollision() {
    if(snake.hasCollided()){
    return true;
    }
    //variables para determinar el final del campo de la snake
    if(snake.hasBrokenTheLimit(0, myCanvas.width-SIZE, 0 , myCanvas.height-SIZE)){
        return true;
    }
    return false;
}

function gameOver() {
    alert('perdido')
    snake.reset();
}
