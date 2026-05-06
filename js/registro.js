var verificacionSesion = localStorage.getItem('sesion_arte_sustentable');
if (verificacionSesion !== null) {
    var usr = JSON.parse(verificacionSesion);
    if (usr.rol === 'docente' || usr.rol === 'admin') {
        window.location.href = 'dashboard-admin.html';
    } else {
        window.location.href = 'dashboard-alumno.html';
    }
}

var formularioRegistro = document.getElementById('formulario-registro');

if (formularioRegistro) {
    formularioRegistro.addEventListener('submit', function(evento) {
        evento.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        var password = document.getElementById('password').value;
        var rol = document.getElementById('rol').value;
        var mensajeRegistro = document.getElementById('mensaje-registro');

        // Leer todos los usuarios
        var listaUsuarios = obtenerTodosLosUsuarios();
        var correoExiste = false;

        // Validar si el correo ya fue usado con un ciclo tradicional
        for (var i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].correo === correo) {
                correoExiste = true;
                break;
            }
        }

        if (correoExiste) {
            mensajeRegistro.style.color = "red";
            mensajeRegistro.textContent = "Error: Este correo ya está registrado en el sistema.";
        } else {
var nuevoUsuario = {
    nombre: nombre,
    correo: correo,
    password: password,
    rol: rol,
    guardados: [] 
};

            listaUsuarios.push(nuevoUsuario);
            guardarListaUsuarios(listaUsuarios);

            mensajeRegistro.style.color = "green";
            mensajeRegistro.textContent = "Cuenta creada exitosamente. Redirigiendo...";

            setTimeout(function() {
                window.location.href = 'login.html';
            }, 1000);
        }
    });
}