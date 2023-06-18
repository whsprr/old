// Define an array of colors
var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

// Function to select a random color
function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Set the random color as the background
document.body.style.backgroundColor = getRandomColor();
