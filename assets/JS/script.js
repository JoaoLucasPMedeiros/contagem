document.addEventListener('DOMContentLoaded', (event) => {
    function calculateCountdown() {
        const now = new Date();
        const targetDate = new Date('2024-06-07T00:00:00'); // Data alvo fixa: 7 de junho de 2024

        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('dia').innerHTML = days + ' dias';
        document.getElementById('hora').innerHTML = hours + ' horas';
        document.getElementById('minu').innerHTML = minutes + ' minutos';
        document.getElementById('seg').innerHTML = seconds + ' segundos';
    }

    // Atualiza a contagem regressiva a cada segundo
    setInterval(calculateCountdown, 1000);

    // Atualiza a contagem regressiva imediatamente ao carregar a página
    calculateCountdown();
});