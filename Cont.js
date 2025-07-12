// Ejemplo: mostrar mensaje cuando el usuario haga clic en un botón
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Se hizo clic en el botón: ${btn.textContent.trim()}`);
    });
});