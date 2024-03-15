import Square from "./square";

export default class {
    constructor(){
       this.headSnake = new Square(0,0)
       this.bodySnake = [];
    }
    hasCollided(){ 
        for (let i = 0; i < this.bodySnake.length; ++i) {
            if(this.bodySnake.checkCollision(headSnake)){
                return true;
            }
        }
    }
    move(){
        
    }
    hasBrokenTheLimit( x1, x2, y1, y2){
        const topCollision = (this.headSnake.y < y1);
        const bottomCollision = (this.headSnake.y > y2);
        const rightCollision = (this.headSnake.x < x1 );
        const leftCollision = (this.headSnake.x > x2)
        
        //verificar que la serpiente no se salga de los limites permitidos
        if(topCollision || bottomCollision || rightCollision || leftCollision){
            return true;
        }
    }
    checkFullCollision(position){
        for (let i = 0; i < this.bodySnake.length; ++i) {
            if(this.bodySnake[i].checkCollision(position)){
                return true;
            }
        }
        //comparar las cordenadas del alimento generadp con la cabeza de la serpiente
        if(this.headSnake.checkCollision(position)){
            return true;
        }
    }
    reset(){
        this.headSnake.x = 0;
        this.headSnake.y = 0;
        dx = 0;
        dy = 0;
        //el snake.bodySnake es una constante entonces toca de cambiarla a let o hacer que la longitud se restaure a 0
        this.bodySnake.length = 0;
    }
    

}