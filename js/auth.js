// Redirección si ya hay sesión
var sesion = localStorage.getItem('sesion_arte_sustentable');
if (sesion && (window.location.pathname.includes('login.html') || window.location.pathname.includes('registro.html'))) {
    var u = JSON.parse(sesion);
    window.location.href = (u.rol === 'alumno') ? 'dashboard-alumno.html' : 'dashboard-admin.html';
}

// Registro
var fReg = document.getElementById('formulario-registro');
if (fReg) {
    fReg.addEventListener('submit', function(e) {
        e.preventDefault();
        var correo = document.getElementById('correo').value;
        var lista = obtenerUsuarios();
        for (var i=0; i<lista.length; i++) {
            if (lista[i].correo === correo) { alert("Este correo ya existe."); return; }
        }
        var nuevo = {
            nombre: document.getElementById('nombre').value,
            correo: correo,
            password: document.getElementById('password').value,
            rol: document.getElementById('rol').value,
            guardados: []
        };
        lista.push(nuevo);
        guardarUsuarios(lista);
        alert("Cuenta creada con éxito.");
        window.location.href = 'login.html';
    });
}

// Login
var fLog = document.getElementById('formulario-login');
if (fLog) {
    fLog.addEventListener('submit', function(e) {
        e.preventDefault();
        var correo = document.getElementById('correo').value;
        var pass = document.getElementById('password').value;
        var usuarios = obtenerUsuarios();
        var encontrado = null;
        for (var i=0; i<usuarios.length; i++) {
            if (usuarios[i].correo === correo && usuarios[i].password === pass) {
                encontrado = usuarios[i];
                break;
            }
        }
        if (encontrado) {
            localStorage.setItem('sesion_arte_sustentable', JSON.stringify(encontrado));
            window.location.href = (encontrado.rol === 'alumno') ? 'dashboard-alumno.html' : 'dashboard-admin.html';
        } else {
            document.getElementById('mensaje-error').textContent = "Correo o contraseña incorrectos.";
        }
    });
}