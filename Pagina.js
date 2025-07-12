// script.js
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector('.hero');
  let hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "¡Buenos días!";
  } else if (hour < 18) {
    greeting = "¡Buenas tardes!";
  } else {
    greeting = "¡Buenas noches!";
  }

  hero.innerHTML += `<p>${greeting} ¡Esperamos que disfrutes tu estadía!</p>`;
});