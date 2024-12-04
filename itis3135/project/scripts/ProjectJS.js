
    const setYear = () => {
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        } else {
            console.error('Element with id "year" not found.');
        }
    };

    // If the footer is included dynamically, wait for the HTMLInclude to finish
    if (typeof HTMLInclude !== 'undefined' && HTMLInclude.onReady) {
        HTMLInclude.onReady(setYear);
    } else {
        // Fallback for when HTMLInclude is not used
        setYear();
    }

    const toggleTheme = () => {
            console.log('Toggle button clicked!');
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        };
    
    document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
    
    // Apply saved theme on load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const countdownElement = document.getElementById('countdown');
        const tryoutDate = new Date('2025-01-21T20:00:00'); // Replace with your tryout date and time (YYYY-MM-DDTHH:MM:SS)
        const interval = setInterval(updateCountdown, 1000);
        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = tryoutDate - now;
    
            if (timeDifference <= 0) {
                countdownElement.textContent = "Tryouts are happening now!";
                clearInterval(interval);
                return;
            }
    
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };
    
        
        updateCountdown(); // Call immediately to avoid 1-second delay
    });