const container = document.getElementById('container');

// Function to create a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create 256 squares
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Add mouseenter event listener to change color
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = getRandomColor();
    });

    // Optional: Add mouseleave event listener to revert color (if needed)
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = ''; // Reset to original (or set to another color)
    });

    container.appendChild(square);
}
