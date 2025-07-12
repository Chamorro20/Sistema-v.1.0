document.addEventListener('DOMContentLoaded', () => {
    cargarClientes();
});

document.getElementById('clienteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !apellido || !email) {
        alert("Por favor completa los campos obligatorios.");
        return;
    }

    const cliente = { nombre, apellido, email, telefono };

    agregarCliente(cliente);
    this.reset();
    mostrarClientes();
});

function agregarCliente(cliente) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
}

function mostrarClientes() {
    const tbody = document.querySelector('#clientesTable tbody');
    tbody.innerHTML = '';
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientes.forEach((cliente, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefono}</td>
            <td><button class="delete-btn" onclick="eliminarCliente(${index})">Eliminar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function eliminarCliente(index) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    mostrarClientes();
}

function cargarClientes() {
    mostrarClientes();
}