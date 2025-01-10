const ROWS = 4

const mainGrid = document.getElementById("main-grid")

generateSquares(ROWS)

function newGrid() {
    const userSize = parseInt(prompt("How many rows? Min 2, max 50:"))
    if (!userSize) {
        return
    }
    const rows = Math.max(Math.min(userSize, 50), 2)
    mainGrid.textContent = '';
    generateSquares(rows)
}

function generateSquares(rows){
    for (let i = 0; i < rows; i++) {
        const newRow = document.createElement("div")
        newRow.classList.add("row")
        newRow.style.height = 100/rows + '%'
        for (let j = 0; j < rows; j++) {
            const newSquare = document.createElement("div")
            newSquare.classList.add("square")
            newSquare.addEventListener('mouseover', function (event) {
                newSquare.style.backgroundColor = "purple"
            })
            newRow.appendChild(newSquare)
        }
        mainGrid.appendChild(newRow)
    }
}