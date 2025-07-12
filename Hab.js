const habitaciones = [
    {
        nombre: "Cama Simple",
        imagen: "Img/SIMPLE.JPG",
        precio: "S/ 50.00 por noche"
    },
    {
        nombre: "Cama Ejecutiva",
        imagen: " Img/EJECUTIVAS.JPG",
        precio: "S/ 60.00 por noche"
    },
    {
        nombre: "Cama Matrimonial",
        imagen: " Img/MATRIMONIAL.JPG",
        precio: "S/ 80.00 por noche"
    },
    {
        nombre: "Cama Doble",
        imagen: " Img/DOBLE.JPG",
        precio: "S/ 90.00 por noche"
    },
    {
        nombre: "Cama con Jacuzzi",
        imagen: " Img/JACCUZY.JPG",
        precio: "S/ 120.00 por noche"
    }
];

const container = document.getElementById("habitaciones-container");

habitaciones.forEach(hab => {
    const div = document.createElement("div");
    div.className = "habitacion";
    div.innerHTML = `
        <img src="${hab.imagen}" alt="${hab.nombre}">
        <div class="info">
            <h2>${hab.nombre}</h2>
            <p>Precio: <strong>${hab.precio}</strong></p>
        </div>
    `;
    container.appendChild(div);
});