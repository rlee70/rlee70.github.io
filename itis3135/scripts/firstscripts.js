

// Add event listener for the submit button after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
        const submitButton = document.getElementById('submit-button');
        function getPolygonName(sides) {
        const polygonNames = [
            "", "", "Digon", "Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octagon", 
            "Nonagon", "Decagon", "Hendecagon", "Dodecagon", "Tridecagon", "Tetradecagon", "Pentadecagon",
            "Hexadecagon", "Heptadecagon", "Octadecagon", "Enneadecagon", "Icosagon"
        ];
        return polygonNames[sides] || "Polygon with " + sides + " sides";
    }

    function penaltyKickSimulator() {
        const outcomes = ["GOAL! 🥅⚽", "MISS! ❌", "SAVED by the keeper! 🧤"];
        const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        alert(`You took the penalty kick... ${outcome}`);
    }

    // Display current date and time
    function displayDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('en-US', options);
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
        const timeElement = document.getElementById('date-time');
        timeElement.textContent = `Today is ${timeStr} on ${dayOfWeek}, ${dateStr}`;
    }

    // Function to handle form submission
    function submitInfo() {
        console.log('Submit button clicked');
        const name = document.getElementById('name').value;
        const mood = document.getElementById('mood').value;
        const favNumber = document.getElementById('fav-number').value;

        // Greet the user
        const greetingElement = document.getElementById('greeting');
        greetingElement.textContent = `Kicking Lion welcomes you, ${name}! We're glad you are doing ${mood}!`;

        // Handle favorite number and alert polygon name
        let number = Math.abs(parseFloat(favNumber)); // Convert to positive (absolute value) and handle decimals
        number = Math.round(number); // Round to the nearest integer
        const polygonName = getPolygonName(number);
        alert(`Your favorite number of sides corresponds to a ${polygonName}.`);
    }
    function lionJoke() {
        const jokes = [
            "Why don’t lions like fast food? Because they can’t catch it!",
            "What do you call a lion wearing a stylish hat? A dandy-lion!",
            "How do lions greet other animals? Pleased to eat you!"
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        alert(joke);
        }
        
        function lionPunGenerator() {
            const puns = [
                "I'm not lion when I say you're amazing!",
                "Stay pawsitive and roar with confidence!",
                "Why don't lions use computers? They're afraid of mouse traps!",
                "This is a roar-some day, isn't it?",
                "You lion if you say you don’t love puns!"
            ];
            const randomPun = puns[Math.floor(Math.random() * puns.length)];
            alert(randomPun);
        }

    function motivationalQuote() {
            const quotes = [
                "Believe in yourself and all that you are. 🦁",
                "The future belongs to those who prepare for it today.",
                "Success is not final; failure is not fatal: It is the courage to continue that counts.",
                "Don’t watch the clock; do what it does. Keep going.",
                "You are stronger than you think. Keep roaring! 🦁"
            ];
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            alert(randomQuote);
        }
    // Call displayDateTime on page load
    displayDateTime();
    submitButton.addEventListener('click', submitInfo);  // Attach event listener to button
    document.getElementById('joke-button').addEventListener('click', lionJoke);
    document.getElementById('penalty-button').addEventListener('click', penaltyKickSimulator);
    document.getElementById('quote-button').addEventListener('click', motivationalQuote);
    document.getElementById('pun-button').addEventListener('click', lionPunGenerator);
    
});

