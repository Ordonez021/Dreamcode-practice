let empleados = [];

function Empleado(legajo,nombre,apellido,nacimiento,cargo) {
    this.lagajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}


function agregarEmpleado() {
    let legajo = document.getElementById("txtLegajo").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtFecha").value;
    let cargo = document.getElementById("txtCargo").value;

    let empleado = new Empleado(legajo,nombre,apellido,nacimiento,cargo);

    empleados.push(empleado);

    alert("agregado");
    //funcion para limpiar los input una ves ingresados
    limpiarCampos();
}


function cargarEmpleado() {
    let listado = '';

    for (let empleado of empleados) {
        for(let prop in empleado){
            listado += prop.toUpperCase() + ": " + empleado[prop] + ","; 
        }
        listado = listado + "\n";
    }
    alert(listado);
}


function limpiarCampos() {
    document.getElementById("txtLegajo").value = " ";
    document.getElementById("txtNombre").value = " ";
    document.getElementById("txtApellido").value = " ";
    document.getElementById("txtFecha").value = " ";
    document.getElementById("txtCargo").value = " ";
}