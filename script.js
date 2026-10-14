const canvasGrid = document.querySelector("#canvas");
const setBtn = document.querySelector("#set-btn");
const gridSizeEl = document.querySelector("#gridsize");


//listen to the setbutton then implement the grid
setBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    const size = gridSizeEl.value;
    gridSizeEl.value = 0;
    if (size > 0 && size <= 100){
        console.log("size =>" + size);
        let i = 0;
        canvasGrid.innerHTML = "";
        do{
            createDivRow(size);
            i++;
        }
        while(i < size)
    } else {
        alert("PLEASE ENTER A VALID INPUT BETWEEN 1 to 100")
    }


});

//create the mouseover effect to change color when you hover over a pixel



function createDivRow(divRowLenght){
// this function takes a x create a div parent and input an x amount of div horizontally inside the parent then append it to our canva

    //create the parentrow div
    const divRow = document.createElement("div");
    divRow.classList.add("div-row")
    let i = 0;
    do {
        const px = document.createElement("div");
        px.classList = "pixel-div"
        divRow.append(px);
        i++;
    }
    while(i < divRowLenght);

    canvasGrid.appendChild(divRow);

}