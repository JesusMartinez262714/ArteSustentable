var fProy = document.getElementById('formulario-proyecto');

if (fProy) {
    fProy.addEventListener('submit', function(e) {
        e.preventDefault();

        // Referencias a los elementos del formulario
        var inputImagen = document.getElementById('imagen-upload');
        var msg = document.getElementById('mensaje-proyecto');
        
        if (inputImagen.files.length === 0) {
            msg.style.color = "red";
            msg.textContent = "Error: Debes seleccionar una imagen.";
            return;
        }

        var lector = new FileReader();
        var archivo = inputImagen.files[0];

        msg.style.color = "orange";
        msg.textContent = "Procesando envío...";

        lector.onload = function(eventoLectura) {
            // Obtener la sesión del usuario logueado
            var s = JSON.parse(localStorage.getItem('sesion_arte_sustentable'));
            var lista = obtenerProyectos(); // Función de db.js

            // Crear el objeto del nuevo proyecto con estado pendiente
            var nuevo = {
                id: new Date().getTime(), // ID único basado en tiempo
                titulo: document.getElementById('titulo').value,
                nivel: document.getElementById('nivel').value,
                material_corto: document.getElementById('materiales').value,
                autor: s.nombre,
                correo_autor: s.correo,
                estado: "pendiente",
                motivo_rechazo: "",
                imagen: eventoLectura.target.result, // Imagen en formato Base64
                materiales_completos: [document.getElementById('materiales').value],
                instrucciones: ["Instrucciones pendientes de revisión por el docente."]
            };

            // Guardar en la base de datos local
            lista.push(nuevo);
            guardarProyectos(lista);

            alert("¡Proyecto enviado! Aparecerá en el catálogo cuando sea aprobado por un docente.");
            window.location.href = 'dashboard-alumno.html';
        };

        lector.onerror = function() {
            msg.style.color = "red";
            msg.textContent = "Error al leer el archivo de imagen.";
        };

        lector.readAsDataURL(archivo);
    });
}