// Evento que se ejecuta al pulsar el botón agregar
document.querySelector("input[type=submit]").addEventListener("click",function(e){
    // cancelamos el evento
    e.preventDefault();
 
    const nombre=document.querySelector("input[name=nombre]");
    const apellido=document.querySelector("input[name=apellido]");
    const telefono=document.querySelector("input[name=telefono]");
    const correo=document.querySelector("input[name=correo]");

    agregarFila(nombre.value, apellido.value,telefono.value,correo.value);
    agregarInput(nombre.value, apellido.value, telefono.value,correo.value);
 
    //limpiamos los valores del input
    correo.value = "";
    telefono.value ="";
    apellido.value ="";
    nombre.value ="";
    nombre.focus();
 
});
 

function agregarFila(nombre, apellido,telefono,correo) {
    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo
    const tr=document.createElement("tr");
 
    const tdNombre=document.createElement("td");
    let txt=document.createTextNode(nombre);
    tdNombre.appendChild(txt);
    tdNombre.className="nombre";
 
    const tdApellido=document.createElement("td");
    txt=document.createTextNode(apellido);
    tdApellido.appendChild(txt);
    tdApellido.className="apellido";

    const tdTelefono=document.createElement("td");
    txt=document.createTextNode(telefono);
    tdTelefono.appendChild(txt);
    tdTelefono.className="telefono";

    const tdCorreo=document.createElement("td");
    txt=document.createTextNode(correo);
    tdCorreo.appendChild(txt);
    tdCorreo.className="correo";

    const tdRemove=document.createElement("td");
    const buttonRemove=document.createElement("img");
    buttonRemove.src="../imagenes/eliminar.png";
    buttonRemove.onclick=eliminarFila;
    tdRemove.appendChild(buttonRemove);

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdCorreo);
    tr.appendChild(tdRemove);

    const tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);

}
