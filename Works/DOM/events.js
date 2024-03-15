let boton = document.getElementById('miBoton');
let div = document.getElementById('miDiv');
let link = document.getElementById('miLink');
let menu = document.getElementById('miLista');
let botonn = document.getElementById('botonmio');


let campo = document.getElementById("miCampo");

// botonn.addEventListener('click' , function (){
//     menu.style.display = 'block';
// })
    
//muestra cuando esta la flecga del raton encima
botonn.addEventListener('mouseover' , function (){
    menu.style.display = 'block';
})

//mostrar en el console la posicion x and y
botonn.addEventListener('mouseover' , function (event){
    console.log("posicion x: " + event.clientX + "posicion Y: " + event.clientY)
})

//se quita cuando la flecha del raton se quita del boton
botonn.addEventListener('mouseout' , function (){
    menu.style.display = 'none';
})
    
function verificarNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    };
};

campo.addEventListener('keydown' , verificarNumero);

campo.addEventListener('keyup', function(){
    console.log("la entrada del usuario : " + event.target.value);
});

campo.addEventListener('keypress', function(){
    console.log("caracter ingresado: " + event.key);
})


function evitarEnlace(){
    event.preventDefault();
    alert('enlace no habilitado');
};

function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
};


div.addEventListener('click', mostrarMensaje);
link.addEventListener('click', evitarEnlace);
