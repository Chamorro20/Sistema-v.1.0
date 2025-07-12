// Simulación de autenticación
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "Menu.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});