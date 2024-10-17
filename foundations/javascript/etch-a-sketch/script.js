const gridContainer = document.querySelector("#grid-container");

let gridSizeButton = document.createElement("button");
gridSizeButton.textContent = "Choose Grid Size";
document.body.prepend(gridSizeButton)

for (let i = 0; i < 16; i++){

    const columnGrid = document.createElement("div");
    columnGrid.classList.add("column")
    gridContainer.appendChild(columnGrid);

    for (let j = 0; j < 16; j++){
        const gridBox = document.createElement("div");
        gridBox.classList.add("column-box");
        columnGrid.appendChild(gridBox);

        gridBox.addEventListener("mouseover", () => {
            gridBox.classList.add("colored-in");
            gridBox.style.backgroundColor = 'black';
        })
    }
}


function changeGridSize(){
    gridSize = parseFloat(prompt("How big would you like the grid to be?"));

    if (gridSize > 100 || gridSize < 2 || isNaN(gridSize) || gridSize % 1 !== 0) {
        gridSize = alert("Grid Size must be between 2 and 100");
        changeGridSize();
    }

    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++){

        const columnGrid = document.createElement("div");
        columnGrid.classList.add("column")
        gridContainer.appendChild(columnGrid);
    
        for (let j = 0; j < gridSize; j++){
            const gridBox = document.createElement("div");
            gridBox.classList.add("column-box");
            columnGrid.appendChild(gridBox);

            gridBox.addEventListener("mouseover", () => {
                gridBox.classList.add("colored-in");
                gridBox.style.backgroundColor = 'black';
            })
        }
    }
}

gridSizeButton.addEventListener("click", changeGridSize);

