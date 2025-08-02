document.addEventListener('DOMContentLoaded', () => {
    // Establece el año actual en el copyright
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Lógica para la cuenta regresiva (opcional)
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // Establece la fecha futura para la cuenta regresiva (Ejemplo: 1 de Septiembre de 2025)
        // Puedes cambiar esta fecha a tu gusto
        const launchDate = new Date('September 1, 2025 00:00:00').getTime();

        const updateCountdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            // Cálculos de tiempo para días, horas, minutos y segundos
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Muestra los resultados en los elementos HTML
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

            // Si la cuenta regresiva ha terminado
            if (distance < 0) {
                clearInterval(updateCountdown);
                countdownElement.innerHTML = "<p>¡Estamos en vivo!</p>"; // O redirigir a la página principal
            }
        }, 1000);
    }
});