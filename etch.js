


const container = document.getElementById("grid-container");

function createGrid(size) {
    // Remove existing squares
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create new squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    // Set grid template columns and rows based on new size
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// Add event listener to button
const button = document.querySelector(".button");
button.addEventListener("click", function() {
    const size = prompt("Enter number of squares per side:");
    if(size > 60){
        alert("enter a number lower than 60");
    }
    else if (size !== null && size !== "") {
        createGrid(parseInt(size));
    }
});

// Create initial grid
createGrid(16);


