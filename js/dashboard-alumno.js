function cargarDash() {
    var u = JSON.parse(localStorage.getItem('sesion_arte_sustentable'));
    var todos = obtenerProyectos();
    var t = document.getElementById('cuerpo-tabla-historial');
    if (t) {
        for (var i=0; i<todos.length; i++) {
            if (todos[i].correo_autor === u.correo) {
                t.innerHTML += `<tr><td>${todos[i].titulo}</td><td style="color:${todos[i].estado==='aprobado'?'green':(todos[i].estado==='rechazado'?'red':'orange')}">
                    ${todos[i].estado === 'rechazado' ? 'Rechazado: ' + todos[i].motivo_rechazo : todos[i].estado}</td></tr>`;
            }
        }
    }
    var g = document.getElementById('contenedor-guardados');
    if (g && u.guardados) {
        g.innerHTML = "";
        for (var j=0; j<u.guardados.length; j++) {
            var pr = obtenerProyectoPorId(u.guardados[j]);
            if (pr) g.innerHTML += `<div class="tarjeta-proyecto" onclick="location.href='proyecto.html?id=${pr.id}'">
                <div class="tarjeta-imagen"><img src="${pr.imagen}"></div><div class="tarjeta-contenido"><h3>${pr.titulo}</h3></div></div>`;
        }
    }
}
cargarDash();