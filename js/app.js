function cargarHome() {
    var cont = document.getElementById('contenedor-proyectos');
    if (!cont) return;
    var p = obtenerProyectos();
    cont.innerHTML = "";
    var mostrados = 0;
    for (var i = p.length - 1; i >= 0 && mostrados < 3; i--) {
        if (p[i].estado === 'aprobado') {
            cont.innerHTML += `<div class="tarjeta-proyecto" onclick="location.href='proyecto.html?id=${p[i].id}'">
                <div class="tarjeta-imagen"><img src="${p[i].imagen}"></div>
                <div class="tarjeta-contenido"><h3>${p[i].titulo}</h3><p>${p[i].material_corto}</p></div>
            </div>`;
            mostrados++;
        }
    }
}
cargarHome();