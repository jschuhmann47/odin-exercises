const ROWS = 4

const mainGrid = document.getElementById("main-grid")

for (let i = 0; i < ROWS; i++) {
    const newRow = document.createElement("div")
    newRow.classList.add("row")
    for (let j = 0; j < ROWS; j++) {
        const newSquare = document.createElement("div")
        newSquare.classList.add("square")
        newSquare.addEventListener('mouseover', function (event) {
            newSquare.style.backgroundColor = "purple"
        })
        // newSquare.addEventListener('mouseleave', function(event){
        //     setTimeout(() => {
        //         newSquare.style.backgroundColor = "pink"
        //     }, 1000)
        // })
        newRow.appendChild(newSquare)
    }
    mainGrid.appendChild(newRow)
}

function newGrid() {
    const userSize = parseInt(prompt("How many rows? Min 2, max 100:"))
    const rows = Math.max(Math.min(userSize, 100), 2)
    console.log(rows)
    // TODO: regenerate rows
}