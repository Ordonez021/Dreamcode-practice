// import '../css/styles.css'
import wplogo from '../img/main.png'

export const saludar = (nombre)=>{
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = wplogo;
    document.body.append(img);

}
