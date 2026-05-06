function filtrar() {
    var texto = document.getElementById('buscar-texto').value.toLowerCase();
    var nivel = document.getElementById('filtro-nivel').value;
    var proyectos = obtenerProyectos();
    var contenedor = document.getElementById('contenedor-catalogo');
    
    // Limpiar el contenedor antes de mostrar resultados
    contenedor.innerHTML = ""; 
    
    for (var i = 0; i < proyectos.length; i++) {
        var proyectoActual = proyectos[i];
        
        if (proyectoActual.estado === 'aprobado') {
            var coincideTexto = false;
            if (texto === "" || proyectoActual.titulo.toLowerCase().indexOf(texto) !== -1 || proyectoActual.material_corto.toLowerCase().indexOf(texto) !== -1) {
                coincideTexto = true;
            }
            
            var coincideNivel = false;
            if (nivel === "todos" || proyectoActual.nivel === nivel) {
                coincideNivel = true;
            }
            
            if (coincideTexto && coincideNivel) {
                // Crear la tarjeta principal
                var tarjeta = document.createElement('div');
                tarjeta.className = "tarjeta-proyecto";
                
                // Usamos una funcion anonima autoejecutable para guardar el id correctamente en el ciclo
                (function(idProyecto) {
                    tarjeta.onclick = function() { 
                        window.location.href = 'proyecto.html?id=' + idProyecto; 
                    };
                })(proyectoActual.id);
                
                // Contenedor de la imagen
                var divImagen = document.createElement('div');
                divImagen.className = "tarjeta-imagen";
                var imagenElemento = document.createElement('img');
                imagenElemento.src = proyectoActual.imagen;
                divImagen.appendChild(imagenElemento);
                
                // Contenedor del texto
                var divContenido = document.createElement('div');
                divContenido.className = "tarjeta-contenido";
                
                var spanNivel = document.createElement('span');
                spanNivel.className = "etiqueta-nivel";
                spanNivel.textContent = proyectoActual.nivel;
                
                var h3Titulo = document.createElement('h3');
                h3Titulo.textContent = proyectoActual.titulo;
                
                // Ensamblar todo
                divContenido.appendChild(spanNivel);
                divContenido.appendChild(h3Titulo);
                
                tarjeta.appendChild(divImagen);
                tarjeta.appendChild(divContenido);
                
                // Agregar al HTML
                contenedor.appendChild(tarjeta);
            }
        }
    }
}

// Ejecutar al cargar la página si existe el contenedor
var contenedorExiste = document.getElementById('contenedor-catalogo');
if (contenedorExiste) {
    filtrar();
}