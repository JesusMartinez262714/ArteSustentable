(function() {
    var sesion = localStorage.getItem('sesion_arte_sustentable');
    var nav = document.querySelector('.nav-links');
    if (!nav) return;

    // Limpiamos el menú para construirlo dinámicamente
    nav.innerHTML = '';

    // Enlaces básicos siempre presentes
    nav.innerHTML += '<li><a href="index.html">Inicio</a></li>';
    nav.innerHTML += '<li><a href="catalogo.html">Catálogo</a></li>';

    if (sesion) {
        var user = JSON.parse(sesion);
        var urlPanel = (user.rol === 'alumno') ? 'dashboard-alumno.html' : 'dashboard-admin.html';

        // Si es alumno y está en su panel, agregamos "Subir Proyecto"
        if (user.rol === 'alumno' && window.location.pathname.includes('dashboard-alumno.html')) {
            nav.innerHTML += '<li><a href="nuevo-proyecto.html" class="btn-nav">Subir Proyecto</a></li>';
        }

        // Enlaces de sesión activa
        nav.innerHTML += '<li><a href="' + urlPanel + '">Mi Panel</a></li>';
        nav.innerHTML += '<li><a href="#" onclick="cerrarSesion()" class="btn-salir">Cerrar Sesión</a></li>';
    } else {
        // Enlace si no hay sesión
        nav.innerHTML += '<li><a href="login.html" class="btn-nav">Iniciar Sesión</a></li>';
    }
})();