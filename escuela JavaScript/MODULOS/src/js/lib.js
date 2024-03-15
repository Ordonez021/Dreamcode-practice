let edad = 20;
export function despedir(despido){
    return `nos vemos ${luego()}  ${despido} ${edad}`;
}

export default class{
    constructor(lado){
        this.lado = lado;
    }
    get area(){
        return this.lado * this.lado;
    }
}

export function saludo(nombre){
    return `hola ${nombre}`;
}   
export let x = 8;

function luego() {
    return 'luego';
}
