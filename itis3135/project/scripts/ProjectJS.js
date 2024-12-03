
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

    