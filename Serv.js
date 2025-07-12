// Lista de servicios del hotel
const servicios = [
    { nombre: "Habitaciones", descripcion: "Amplias habitaciones con vista a pista." },
    { nombre: "Restaurante", descripcion: "Desayuno buffet y cocina internacional." },
    { nombre: "Piscina", descripcion: "Piscina al aire libre con zona infantil." },
    { nombre: "Wi-Fi Gratis", descripcion: "Conexión a internet de alta velocidad." },
    { nombre: "Spa", descripcion: "Servicio de masajes y tratamientos faciales." },
    { nombre: "Gimnasio", descripcion: "Equipamiento moderno 24 horas." }
];

// Función para cargar servicios
function cargarServicios() {
    const contenedor = document.getElementById("service-list");

    servicios.forEach(servicio => {
        const div = document.createElement("div");
        div.className = "service-card";
        div.innerHTML = `<strong>${servicio.nombre}</strong><br>${servicio.descripcion}`;
        contenedor.appendChild(div);
    });
}

// Cargar servicios al iniciar la página
window.onload = cargarServicios;