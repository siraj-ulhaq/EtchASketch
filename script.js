let grid = document.querySelector(".container");

const rows = 16;
const columns = 16;
const width = 960;
const height = 960;

function addRows(rows) {
    for(let i=1; i<=rows; i++){
        const rowBlock = document.createElement("div");
        rowBlock.style.cssText = "height: " + height/rows + "px; width: " + width + "px; display: flex; box-sizing: border-box;";
        rowBlock.classList = "row"+i;
        rowBlock.setAttribute("id", "row");
        grid.appendChild(rowBlock);
    }
}

function addPixels(rows, columns, height, width) {
    for (let j=1;j<=rows;j++){
        const row = document.querySelector(".row"+j);
        for (let k=1;k<=columns;k++){
            const square = document.createElement("div");
            square.style.cssText = "height: " + height/rows + "px; width: " + width/columns + "px; border-style: solid; box-sizing: border-box;";
            square.classList = "square";
            square.addEventListener("mouseover", ()=> {
                console.log("hovered");
                square.style.cssText += "background-color: black; border-style: None;";
                if (square.style.opacity <= 0.9) {
                    square.style.opacity = +square.style.opacity + 0.2;
                }
            })
            row.appendChild(square);
        }
    }
}

addRows(rows);
addPixels(rows, columns, height, width);

const btn = document.querySelector(".change");

btn.addEventListener("click", ()=> {
    let keeprunning = true;
    while(keeprunning){
        let input = prompt("How many squares per side of grid");
        if ((input > 100) || (input < 0)) {
            alert("Invalid number, Please try again!");
        } else {
            const num = document.querySelectorAll("#row");
            const arr = Array.from(num);
            for (let i=1; i<=arr.length;i++){
                const rowToremove = document.querySelector(".row"+i);
                grid.removeChild(rowToremove);
            }
            let newRows = input;
            let newColumns = newRows;
            addRows(newRows);
            addPixels(newRows, newColumns, height, width);
            keeprunning = false;
        }
    }
});


























