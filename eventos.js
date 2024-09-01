// Manejador de eventos para el "click" en el div
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el primer div en el documento
    const div = document.querySelector('div');

    // Agrega un manejador de eventos al "click" en el div
    div.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
});