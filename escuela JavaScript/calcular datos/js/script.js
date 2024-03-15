
// PATRON MODULAR PARA COLOCAR EL CODIGO PRIVADO

//html no podra acceder a las funciones lo que tenemos que hacer es agregar una const con una variable 
// y luego retornarla;

const myModule = (()=> {
    // 'use strict' manera estricta
    'use strict'
    //Cuadrado
    const periSquare = (lado)=> lado * 4;
    const areaSquare = (lado) => lado * lado;
    //Triangulo
    const periTriangle = (lado1,lado2,lado3)=> lado1+lado2+lado3;
    const areaTriangle = (base,altura)=> base * altura / 2;
    //Circle
    const periCircle = (radio)=> (2 * Math.PI * radio).toFixed(2);//toFixed(para dos decimales)
    const areaCircle = (radio) => Math.PI * radio^2;

    let valueResult = document.getElementById('respuesta') 

    /*SELECCIONAMOS TODOS LOS BOTONES QUE ESTABAN COMO ONCLICK QUE PASARON A ID  con queryselector pero se puede tamnbien con getelementbyid*/
    const btnPerimetroSquare = document.querySelector('#btnPerimetroSquare'),
          btnAreaSquare = document.querySelector('#btnAreaSquare'),
          btnPerimetroTriangle = document.querySelector('#btnPerimetroTriangle'),
          btnAreaTriangle = document.querySelector('#btnAreaTriangle'),
          btnDiametroCircle = document.querySelector('#btnDiametroCircle'),
          btnPerimetroCircle = document.querySelector('#btnPerimetroCircle'),
          btnAreaCircle = document.querySelector('#btnAreaCircle');



    //SQUARE
    /**
     * TENEMOS QUE CAMBIAR LAS FUNCIONES HACIENDO LA LLADA DEL ID QUE COLOCAMOS EN HTML
     * (btnPerimetroSquare) Y agregar addeventlistener con el evento click
     * esto es manipular el dom
     */
    btnPerimetroSquare.addEventListener('click', ()=>{
        let lado = parseInt(document.getElementById('ladoCuadrado').value);

        if (isNaN(lado)){
            alert("Debes llenar la casilla")
            return;
        }else{
            let valorFinal = periSquare(lado);
            valueResult.innerText =`El Perimetro del Cuadrado es: ${valorFinal} cm`;
        }
        document.getElementById('ladoCuadrado').value = "";
    });
    btnAreaSquare.addEventListener('click', ()=>{
        let lado = parseInt(document.getElementById('ladoCuadrado').value);
        if (isNaN(lado)){
            alert("Debes llenar la casilla")
            return;
        }else{
            let valorFinal = areaSquare(lado);
            valueResult.innerText = `El Área del Cuadrado es: ${valorFinal} cm^2`;
        }
        document.getElementById('ladoCuadrado').value = "";
    });

    //TRIANGLE
    btnPerimetroTriangle.addEventListener('click', ()=>{
        let lado1 = parseInt(document.getElementById('ladoTriangulo1').value);
        let lado2 = parseInt(document.getElementById('ladoTriangulo2').value);
        let lado3 = parseInt(document.getElementById('ladoTriangulo3').value);

        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)){
            alert("Debes llenar la casilla")
            return;
        }else{
            let valorFinal = periTriangle(lado1,lado2,lado3);
            valueResult.innerText = `El Perimetro del Triangulo es: ${valorFinal} cm`;
        
        }
        document.getElementById('ladoTriangulo1').value = "";
        document.getElementById('ladoTriangulo2').value = "";
        document.getElementById('ladoTriangulo3').value = "";
    });
    btnAreaTriangle.addEventListener('click', ()=>{
        let base = parseInt(document.getElementById('baseTriangulo1').value);
        let altura = parseInt(document.getElementById('alturaTriangulo2').value);
        
        if (isNaN(base) || isNaN(altura)){
            alert("Debes llenar la casilla")
            return;
        }else{
            let valorFinal = areaTriangle(base,altura);
            valueResult.innerText = `El Área del Triangulo es: ${valorFinal} cm^2`;
        }
        document.getElementById('baseTriangulo1').value = "";
        document.getElementById('alturaTriangulo2').value = "";
    });

    //Circle
    btnPerimetroCircle.addEventListener('click', ()=>{
        let radio = parseInt(document.getElementById('radio').value);

        if (isNaN(radio)){
            alert("Debes llenar la casilla")
            return;
        }else{
            let valorFinal = periCircle(radio);
            valueResult.innerText = `El Área del Circulo es: ${valorFinal} cm`;
        }
        document.getElementById('radio').value = "";
    });

    btnAreaCircle.addEventListener('click', ()=>{
        let radio = parseInt(document.getElementById('radio').value);

        if (isNaN(radio)){
            alert("Debes llenar la casilla")
            return;
        }else{
            let valorFinal = areaCircle(radio);
            valueResult.innerText = `El Área del Circulo es: ${valorFinal} cm^2`;
        }
        document.getElementById('radio').value = "";

    });


    /* ESTA NO ES LA FORMA CORRECTA EXPORTAR UNA POR UNA  
    //tenemos que exportar las funciones para que pueda accerder el html
    return {
        cpq : perimetroCuadrado,
        caq : AreaCuadrado,
        //tenemos que ir al html y cambiar la funcion del onclick por=> myModule.cpq();
    };
    */

    // function reiniciar() {
    //     location.reload();
    // }    
})();




// MININIFCAR EL ARCHIVO JAVASCRIPT