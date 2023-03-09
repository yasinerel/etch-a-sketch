      // Generate the 16x16 grid of square divs
const container = document.getElementById("grid-container");
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
}


const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
    let favDrink = prompt("Number of squares per side for the new grid?");
  
});

