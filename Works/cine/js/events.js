// let arreglo = "bienvenido";

// function loopear(){
//   for( let letra of arreglo){
  
//     document.write(letra );
//   }
// }

// loopear()



// for (let y = 0; y <= 10; y++) {
//   if(y == 4){

//     continue;
//   } else{
//     document.write(y);

//   }
// }


let notas = [4, 5, 3, 7, 4];
function listarNotas(){
    let lista  = document.getElementById("listarnotas");

    for(let nota of notas){
        // Crear un nuevo elemento li
        let item = document.createElement("li");
        // Establecer el texto del elemento li
        item.innerText = nota;
        // Agregar el elemento li al elemento ul
        lista.appendChild(item);
    }
}

let elementoresul = document.getElementById("resultado");
let elementoCambiar = document.getElementById("cambiar")

function mostraResultado(result){
  elementoresul.value = "" + result;
}


function calcularPromedio() {

    let acumulador = 0;
    for(let num of notas){
      let resultado = acumulador += num;
        mostraResultado("" + resultado/ 5)
    }
}

function NotaMasAlta() {
  let max = 0;
  let i = 0;

  while (i < 5) {
    if (notas[i] > max) {
       max = notas[i];
    }
    i++;
  }
mostraResultado(max);

  // let max = 0;
  // for (let index = 0; index < notas.length; index++) {
  //   if(notas[index] > max){
  //       max = notas[index];
  //   }
  //   mostraResultado(max)
  // }
}

function Aplazadas() {
  let aplazo = "no";
  let i = 0;

  do {
      if (notas[i] < 4) {
        aplazo = "si";
        break;

      }
      i++;
  } while (i<5);

  mostraResultado("no hay un aplazo")

  // for (let index = 1; index < notas.length; index++) {
  //   if(notas.length <= 4){
  //     mostraResultado("existe un aplazo");
  //       break;
  //   }else{
  //     mostraResultado("no hay un aplazo")
  //   }
    
  // }

}