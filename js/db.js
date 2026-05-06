function inicializarBD() {
    if (!localStorage.getItem('bd_proyectos')) {
        var iniciales = [
            { 
                id: 1, 
                titulo: "Maqueta Sistema Solar", 
                nivel: "Primaria", 
                material_corto: "Cartón y tapones", 
                autor: "Juan Bojórquez",
                correo_autor: "juan@itson.mx",
                estado: "aprobado",
                motivo_rechazo: "",
                imagen: "https://manualidadesparahacerencasa.com/wp-content/uploads/2019/01/ideas-de-maquetas-del-sistema-solar-faciles-1.jpg",
                materiales_completos: ["Tapones de plástico", "Base de cartón", "Pintura"],
                instrucciones: ["1. Pinta la base de negro.", "2. Pinta los tapones como planetas.", "3. Pégalos en orden."]
            }
        ];
        localStorage.setItem('bd_proyectos', JSON.stringify(iniciales));
    }
    if (!localStorage.getItem('bd_usuarios')) {
        localStorage.setItem('bd_usuarios', JSON.stringify([]));
    }
}
inicializarBD();

function obtenerProyectos() { return JSON.parse(localStorage.getItem('bd_proyectos')); }
function guardarProyectos(l) { localStorage.setItem('bd_proyectos', JSON.stringify(l)); }
function obtenerUsuarios() { return JSON.parse(localStorage.getItem('bd_usuarios')); }
function guardarUsuarios(l) { localStorage.setItem('bd_usuarios', JSON.stringify(l)); }

function obtenerProyectoPorId(id) {
    var p = obtenerProyectos();
    for(var i=0; i<p.length; i++) { if(p[i].id == id) return p[i]; }
    return null;
}