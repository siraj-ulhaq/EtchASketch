// const rowBlock = document.createElement("div");
const grid = document.querySelector(".container");

let rows = 16;
let columns = 16;
let width = 960;
let height = 960;

for(let i=1; i<=rows; i++){
    const rowBlock = document.createElement("div");
    rowBlock.style.cssText = "height: " + height/rows + "px; width: " + width + "px; display: flex; box-sizing: border-box;";
    rowBlock.classList = "row"+i;
    grid.appendChild(rowBlock);
}

for (let j=1;j<=rows;j++){
    const row = document.querySelector(".row"+j);
    for (let k=1;k<=columns;k++){
        const square = document.createElement("div");
        square.style.cssText = "height: " + height/rows + "px; width: " + width/columns + "px; border-style: solid; box-sizing: border-box;";
        row.appendChild(square);
    }
}
















