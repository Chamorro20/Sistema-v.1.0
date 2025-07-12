// Lista de habitaciones
const rooms = [104, 106, 108, 110, 202, 204, 206, 208, 210, 212, 214, 302, 304, 306, 308, 310, 312, 314];

// Estado inicial: todas disponibles
const roomStatus = {};
rooms.forEach(room => {
  roomStatus[room] = "available"; // "available" o "occupied"
});

// Generar los botones dinámicamente
const container = document.getElementById("roomContainer");

rooms.forEach(roomNumber => {
  const button = document.createElement("button");
  button.classList.add("room-button", roomStatus[roomNumber]);
  button.textContent = `Hab ${roomNumber}`;
  button.addEventListener("click", () => toggleRoomStatus(button, roomNumber));
  container.appendChild(button);
});

// Función para cambiar el estado
function toggleRoomStatus(button, roomNumber) {
  const currentStatus = roomStatus[roomNumber];
  const newStatus = currentStatus === "available" ? "occupied" : "available";
  roomStatus[roomNumber] = newStatus;

  button.classList.remove("available", "occupied");
  button.classList.add(newStatus);

  console.log(`Habitación ${roomNumber} ahora está: ${newStatus}`);
}