export default class {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw(){

    }
    desplazamiento(dx,dy){
        this.x += dx;
        this.y += dy;
    }
    checkCollision(objeto){
        return this.x == objeto.x && this.y == objeto.y;
    }
}