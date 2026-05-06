function cargarMod() {
    var c = document.getElementById('contenedor-moderacion');
    if (!c) return;
    var p = obtenerProyectos();
    c.innerHTML = "";
    var hay = false;
    for (var i=0; i<p.length; i++) {
        if (p[i].estado === "pendiente") {
            hay = true;
            c.innerHTML += `<div class="tarjeta-proyecto">
                <div class="tarjeta-imagen"><img src="${p[i].imagen}"></div>
                <div class="tarjeta-contenido"><h3>${p[i].titulo}</h3>
                    <button class="btn-aprobar" onclick="decidir(${p[i].id},'aprobado')">Aprobar</button>
                    <button class="btn-rechazar" onclick="decidir(${p[i].id},'rechazado')">Rechazar</button>
                </div></div>`;
        }
    }
    if(!hay) c.innerHTML = "<p>Sin pendientes.</p>";
}
function decidir(id, est) {
    var mot = (est === 'rechazado') ? prompt("Motivo:") : "";
    if (est === 'rechazado' && !mot) return;
    var l = obtenerProyectos();
    for (var i=0; i<l.length; i++) {
        if (l[i].id == id) { l[i].estado = est; l[i].motivo_rechazo = mot; break; }
    }
    guardarProyectos(l);
    cargarMod();
}
cargarMod();