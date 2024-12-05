

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

    // Call displayDateTime on page load
    displayDateTime();
    submitButton.addEventListener('click', submitInfo);  // Attach event listener to button
    document.getElementById('joke-button').addEventListener('click', lionJoke);
    function lionJoke() {
    const jokes = [
        "Why don’t lions like fast food? Because they can’t catch it!",
        "What do you call a lion wearing a stylish hat? A dandy-lion!",
        "How do lions greet other animals? Pleased to eat you!",
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    alert(joke);
    }   
});

