var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var p = obtenerProyectoPorId(id);
if (p) {
    document.getElementById('detalle-nivel').textContent = p.nivel;
    document.getElementById('detalle-titulo').textContent = p.titulo;
    document.getElementById('detalle-autor').textContent = p.autor;
    document.getElementById('detalle-imagen').src = p.imagen;
    var l = document.getElementById('lista-materiales');
    for(var i=0; i<p.materiales_completos.length; i++) { l.innerHTML += '<li>'+p.materiales_completos[i]+'</li>'; }
    var c = document.getElementById('contenedor-instrucciones');
    for(var j=0; j<p.instrucciones.length; j++) { c.innerHTML += '<p>'+p.instrucciones[j]+'</p>'; }
}
var btnG = document.getElementById('btn-guardar-proyecto');
if (btnG) {
    btnG.onclick = function() {
        var s = localStorage.getItem('sesion_arte_sustentable');
        if (!s) { alert("Inicia sesión."); return; }
        var u = JSON.parse(s);
        var usrs = obtenerUsuarios();
        for (var k=0; k<usrs.length; k++) {
            if (usrs[k].correo === u.correo) {
                if (usrs[k].guardados.indexOf(id) === -1) {
                    usrs[k].guardados.push(id);
                    guardarUsuarios(usrs);
                    localStorage.setItem('sesion_arte_sustentable', JSON.stringify(usrs[k]));
                    alert("Guardado.");
                } else { alert("Ya lo tienes."); }
                break;
            }
        }
    };
}