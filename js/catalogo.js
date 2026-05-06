function filtrar() {
    var txt = document.getElementById('buscar-texto').value.toLowerCase();
    var niv = document.getElementById('filtro-nivel').value;
    var p = obtenerProyectos();
    var cont = document.getElementById('contenedor-catalogo');
    cont.innerHTML = "";
    for (var i=0; i<p.length; i++) {
        if (p[i].estado === 'aprobado' && (txt === "" || p[i].titulo.toLowerCase().indexOf(txt) !== -1) && (niv === "todos" || p[i].nivel === niv)) {
            cont.innerHTML += `<div class="tarjeta-proyecto" onclick="location.href='proyecto.html?id=${p[i].id}'">
                <div class="tarjeta-imagen"><img src="${p[i].imagen}"></div>
                <div class="tarjeta-contenido"><h3>${p[i].titulo}</h3></div>
            </div>`;
        }
    }
}
if(document.getElementById('contenedor-catalogo')) filtrar();