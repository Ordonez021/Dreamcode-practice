// const palindromo = (palabra)=>{
//     palabra = palabra.replace('','');
//     palabra  = palabra.toLowerCase();

//     let palabrainvertida = palabra.split('').reverse().join('');
    
//     if(palabra === palabrainvertida){
//         return true;
//     }else{
//         return false;
//     }
// }
// const suma = (a,b)=>a+b;


// let word = prompt('ingresa la palabra');

// if(palindrom(work)){
//     document.write('es palindromo');
// }else{
//     document.write('No es palindromo');

// }



const primos = (numero)=>{
    let contador = 0;
    let numeros = [];
    for(let i = 0; i < numero; i++){
        numeros.push(i+1);
    }

    for(let n of numeros){
        if(n === 1 || n === numero){
            continue;
        }
        if(numero % n === 0){
            contador++;
        }
    }
    return contador === 0;
}


let numero = Number(prompt('ingrese el numero: '))

if(primos(numero)){
    document.write('Primo')
}else{
    document.write('No es Primo')
}