async function llamarContenido(){
    //funcion para cargar cotizaciones
   
        cargarCotizaciones(mostrarCotizacion);
        //funcion que cargue los elementos

        cargarElementos();
        //funcion que cargue los textos    
   
    cargarTexto();

}

async function cargarCotizaciones(callback) {

    await time(2000)

    let dolarBitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    callback(await dolarBitcoin.json());
    
    let dolarEuro = await fetch('https://open.er-api.com/v6/latest/USD');
    let datoDolarEuro = await dolarEuro.json();
    document.getElementById('UsdEuro').append(datoDolarEuro.rates.EUR);

    //no creamos el fetch si no que creaamos una funcion (crearPedido), para llamar a los datos desde una funcion que se muestra abajo;
    let dolarPesoArg = await crearPedido('https://open.er-api.com/v6/latest/ARS');
    document.getElementById('UsdArgen').append(dolarPesoArg.rates.USD);
    
    document.getElementById('imsgEsperar').style.visibility = 'hidden';

    
}

function mostrarCotizacion(dato) {
    document.getElementById('BitcoinUsd').append(dato.bpi.USD.rate);
}

async function crearPedido(url){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}

function cargarElementos() {
    document.getElementById('imglogo').setAttribute('src','imagen.png');
    document.getElementById('titulo').textContent = 'Cotizaciones Online';
    document.getElementById('imsgEsperar').setAttribute('src', 'loading.gif')
    document.getElementById('imsgEsperar').style.visibility = 'visible';
    
}
function cargarTexto() {
    document.getElementById('UsdEuro').append('Dolar a Euro: ');  
    document.getElementById('UsdArgen').append('Dolar a Peso Argentino: ');  
    document.getElementById('BitcoinUsd').append('Bitcoin a dolar: ');  
}

function time(ms){
    return new Promise(function(res){
        setTimeout(res , ms)
    })
}