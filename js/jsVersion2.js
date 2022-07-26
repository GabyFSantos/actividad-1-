document.querySelector("input[type=submit]").addEventListener("click",function(e){
    // cancelamos el evento submit
    e.preventDefault();
 
    var nombre=document.querySelector("input[name=nombre]");
    var apellido=document.querySelector("input[name=apellido]");
    var telefono=document.querySelector("input[name=telefono]");
    var correo=document.querySelector("input[name=correo]");
 
    // mostramos un error si no ha recibido el nombre
    if(!nombre.value)
    {
        nombre.classList.add("error");
        return;
    }
    nombre.classList.remove("error");
 
    // mostramos un error si no ha recibido un Telefono
    if(isNaN(parseInt(apellido.value)) || parseInt(apellido.value)<=0)
    {
        edad.classList.add("error");
        return;
    }
    apellido.classList.remove("error");

        // mostramos un error si no ha recibido Telefono
    if(!telefono.value)
    {
        telefono.classList.add("error");
        return;
    }
    nombre.classList.remove("error");

    // mostramos un error si no ha recibido Correo
    if(!correo.value)
    {
        correo.classList.add("error");
        return;
    }
    nombre.classList.remove("error");
 
    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo
    var tr=document.createElement("tr");
 
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
 
    var tdRemove=document.createElement("td");
    var buttonRemove=document.createElement("input")
    buttonRemove.type="button";
    buttonRemove.value="Eliminar";
    buttonRemove.onclick=function () {
        // elimina la columna
        this.parentElement.parentElement.remove();
 
        // Si no hay ningun alumno, escondemos la tabla
        if(document.getElementById("listado").querySelector("tbody").querySelectorAll("tr").length==0)
        {
            document.getElementById("listado").classList.add("hide");
        }
    };
    tdRemove.appendChild(buttonRemove);
 
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdTelefono);
    tr.appendChild(tdCorreo);
    tr.appendChild(tdRemove);
 
    var tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);
 
    // eliminamos la clase que tiene oculta la tabla cando no hay ningun alumno
    document.getElementById("listado").classList.remove("hide");
 
    //limpiamos los valores del input
    apellido.value="";
    nombre.value="";
    correo.value="";
    telefono.value="";
    nombre.focus();

});