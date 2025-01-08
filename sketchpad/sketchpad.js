const ROWS = 4

const mainGrid = document.getElementById("main-grid")

for (let i = 0; i < ROWS; i++) {
    const newRow = document.createElement("div")
    newRow.classList.add("row")
    for (let j = 0; j < ROWS; j++) {
        const newSquare = document.createElement("div")
        newSquare.classList.add("square")
        newRow.appendChild(newSquare)
    }
    mainGrid.appendChild(newRow)
}
