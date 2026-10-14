const canvasGrid = document.querySelector("#canvas");
const setBtn = document.querySelector("#set-btn");
const gridSizeEl = document.querySelector("#gridsize");


//listen to the setbutton then implement the grid
setBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    const size = gridSizeEl.value;
    console.log(size);
});