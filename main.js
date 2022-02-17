const container = document.querySelector(".grid-container")
let colorChoice = document.querySelector("#colorInput").value
let colorTemp
const resizeGridButton = document.querySelector(".resize-btn")
const resetGridButton = document.querySelector(".reset-btn")
const applyColorButton = document.querySelector(".apply-color-button")
let gridSize = 10                                       //default size
let isPressed = false
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
    }
})

applyColorButton.addEventListener("click", (e)=> {
    colorChoice = document.querySelector("#colorInput").value
})





function createGrid() {
    // append div to the grid container n time the result of gridSize * gridSize ex: 10 * 10 grid 
    for (let i = 0; i < gridSize * gridSize; i++) {
        container.appendChild(document.createElement("div")).classList.add("grid-element")
        //saving into a variable all the appended div and creating an array from them
        gridElement = document.querySelectorAll(".grid-element")
        gridElementArray = Array.from(gridElement)
        // adding an event listener to all the grid element stored into the array
        container.addEventListener("mouseleave", ()=> {
            isPressed = false
        })
        // one for adding the hovering effect
        gridElementArray[i].addEventListener("mouseover", (e) => {
            colorTemp = gridElementArray[i].style.backgroundColor
            gridElementArray[i].style.backgroundColor = "black";
        })
        gridElementArray[i].addEventListener("mouseleave", (e) => {
            if (gridElementArray[i].style.backgroundColor === "black" && colorTemp !== "white" && colorTemp !== '') {
                gridElementArray[i].style.backgroundColor = `${colorTemp}`
            }
            if (gridElementArray[i].style.backgroundColor === "black" && colorTemp === "white" || colorTemp === '' ){
                gridElementArray[i].style.backgroundColor = "white"
            }
            if (gridElementArray[i].style.backgroundColor === "black" && colorTemp === "white" || colorTemp === '' && isPressed === true) {
                gridElementArray[i].style.backgroundColor = `${colorChoice}`
            }
        })
        gridElementArray[i].addEventListener("mousedown", (e)=> {
            isPressed = true
        }) 

        gridElementArray[i].addEventListener("mousemove", (e)=> {
            if (isPressed === true) {
            gridElementArray[i].style.backgroundColor = `${colorChoice}`;
            }
        })

        gridElementArray[i].addEventListener("mouseup", (e)=> {
            isPressed = false
        })
        
        
        // change the css variable so that the grid size can dynamically change based on the grid size the user want
        document.documentElement.style.setProperty('--repeat-grid', gridSize)
    }
    
}

 




