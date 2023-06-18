// Define an array of colors
var colors = ["blue", "green", "#990000", "purple", "#ffea03"];

// Function to select a random color
function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Set the random color as the background
document.body.style.backgroundColor = getRandomColor();
