const canvasGrid = document.querySelector("#canvas");
const setBtn = document.querySelector("#set-btn");
const gridSizeEl = document.querySelector("#gridsize");


//listen to the setbutton then implement the grid
setBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const size = gridSizeEl.value;
    gridSizeEl.value = Number;
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


    canvasGrid.addEventListener('mouseover', (e) => {
    const color = getRandomColor();
    e.target.style.borderColor = color;
    e.target.style.backgroundColor = color;
    });

});






function createDivRow(divRowLenght){
// this function takes a x create a div parent and input an x amount of div horizontally inside the parent then append it to our canva


    // handle invalid divrowLenght,making sure it cap at 100 incase the user call the function from the console
    if (divRowLenght < 0 || divRowLenght > 100){
        alert("Dont play smart i caught you");
        return null;
    }

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



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}