document.getElementById('formReserva').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const habitacion = document.getElementById('habitacion').value;
    const fecha = document.getElementById('fecha').value;

    if (!nombre || !habitacion || !fecha) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const reserva = `${nombre} - ${habitacion} - ${fecha}`;

    const li = document.createElement('li');
    li.textContent = reserva;

    document.getElementById('listaReservas').appendChild(li);

    // Limpiar formulario
    document.getElementById('formReserva').reset();
});