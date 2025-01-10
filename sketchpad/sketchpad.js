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
    const color = randomHSLA()
    for (let i = 0; i < rows; i++) {
        const newRow = document.createElement("div")
        newRow.classList.add("row")
        newRow.style.height = 100/rows + '%'
        for (let j = 0; j < rows; j++) {
            const newSquare = document.createElement("div")
            newSquare.classList.add("square")
            newSquare.addEventListener('mouseover', function (event) {
                newSquare.style.backgroundColor = color
            })
            newRow.appendChild(newSquare)
        }
        mainGrid.appendChild(newRow)
    }
}

function randomHSLA() {
    return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`;
}
