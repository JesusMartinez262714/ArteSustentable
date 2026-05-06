function stats() {
    var p = obtenerProyectos();
    var u = obtenerUsuarios();
    var pen = 0;
    for(var i=0; i<p.length; i++) { if(p[i].estado === "pendiente") pen++; }
    document.getElementById('num-usuarios').textContent = u.length;
    document.getElementById('num-proyectos').textContent = p.length;
    document.getElementById('num-pendientes').textContent = pen;
}
stats();