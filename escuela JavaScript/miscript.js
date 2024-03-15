
function agregarHijos(){
    let contenido = document.getElementById('contenedor');
    
    let label = document.createElement("label");
    label.setAttribute("for" , "txtname");
    label.innerText = "Name";

    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "txtname");
    input.setAttribute("min", 0);
    input.setAttribute("max", 10);

    contenido.appendChild(label);
    contenido.appendChild(input);

    return contenido;
}
