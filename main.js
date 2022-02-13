const container = document.querySelector(".grid-container")
const resizeGridButton = document.querySelector(".resize-btn")
const resetGridButton = document.querySelector(".reset-btn")
let isTheGridPressed = false
let gridSize = 10       //default size
let gridElement;
let gridElementArray


createGrid()
// event listener on the resize btn to resize the grid
resizeGridButton.addEventListener("click", ()=> {
    gridSize = parseInt(prompt("Insert the new size of the grid, (A number beetween 1 and 90)."))
    if (gridSize > 0 && gridSize < 91) {
        createGrid()                                    
    }
    else {
        alert("The size is too big, insert a number beetween 1 and 90")
    }
})

// event listener on the reset btn to reset the grid 
resetGridButton.addEventListener("click", (e) => {
    for(let i = 0; i < gridElementArray.length; i++) {
        gridElementArray[i].style.backgroundColor = "white";
        gridElementArray[i].style
    }
})

function createGrid() {
    // append div to the grid container n time the result of gridSize * gridSize ex: 16 * 16 grid 
    for (let i = 0; i < gridSize * gridSize; i++) {
        container.appendChild(document.createElement("div")).classList.add("grid-element")
        //saving into a variable all the appended div and creating an array from them
        gridElement = document.querySelectorAll(".grid-element")
        gridElementArray = Array.from(gridElement)
        // adding an event listener to all the grid element stored into the array

        // one for adding the hovering effect
        gridElementArray[i].addEventListener("mouseover", (e) => {
            if (gridElementArray[i].style.backgroundColor !== "red") {
            gridElementArray[i].style.backgroundColor = "black";
            }

            // one to color a cell when the user click
        gridElementArray[i].addEventListener("mousedown", (e) => {
            gridElementArray[i].style.backgroundColor = "red";
        })

        // one for remove the hovering effect
        gridElementArray[i].addEventListener("mouseleave", ()=> {
            if (gridElementArray[i].style.backgroundColor !== "red") {
                gridElementArray[i].style.backgroundColor = "white";
            }
             
            
        })
        })
        
        // change the css variable so that the grid size can dynamically change based on the grid size the user want
        document.documentElement.style.setProperty('--repeat-grid', gridSize)
    }
    
}

 




