const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
const defaultGridSize = 16; // Default grid size

// Function to create a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create a grid
function createGrid(size) {
    // Remove existing squares
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const squareSize = 960 / size; // Calculate the size of each square based on total width

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add mouseenter event listener to change color
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
    }
}

// Initial grid creation
createGrid(defaultGridSize);

// Event listener for the button
resetButton.addEventListener('click', () => {
    let newSize;
    do {
        newSize = prompt("Enter the number of squares per side (max 100):");
        newSize = parseInt(newSize, 10);
    } while (isNaN(newSize) || newSize < 1 || newSize > 100);

    createGrid(newSize);
});
