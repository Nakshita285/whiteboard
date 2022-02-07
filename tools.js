let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let pencilOptions = pencil.querySelector(".tool-options");
let eraserOptions= eraser.querySelector(".tool-options");

let pencilSizeOption = pencil.querySelector("input");
let eraserSizeOption = eraser.querySelector("input");

let allPencilColors = pencil.querySelectorAll(".pencil-colors div");

let activeTool = "pencil";
let currentPencilSize = "5";
let currentEraserSize = "10";
let currentPencilColor = "black";

for(let i=0; i< allPencilColors.length; i++){
    allPencilColors[i].addEventListener("click", function(e){
        let selectedPencilColor = e.target.classList[0];
        ctx.strokeStyle = selectedPencilColor;
        currentPencilColor = selectedPencilColor;
    })
}

pencilSizeOption.addEventListener("change", function(){
    let updatedPencilSize = pencilSizeOption.value;
    ctx.lineWidth = updatedPencilSize;
    currentPencilSize = updatedPencilSize;
})

eraserSizeOption.addEventListener("change", function(){
    let updatedEraserSize = eraserSizeOption.value;
    ctx.lineWidth = updatedEraserSize;
    currentEraserSize = updatedEraserSize;
})

pencil.addEventListener( "click" , function(){
    pencil.classList.add("activeToolStyling");
    if(activeTool == "pencil"){
        if(pencilOptions.classList.contains("hide")){
            pencilOptions.classList.remove("hide");
        }else{
            pencilOptions.classList.add("hide");
        }
    }
    else{
        eraserOptions.classList.add("hide");
        activeTool = pencil;
        ctx.lineWidth = currentPencilSize;
        ctx.strokeStyle = currentPencilColor;
    }
})

eraser.addEventListener( "click" , function(){
    if(activeTool == "eraser"){
        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide");
        }else{
            eraserOptions.classList.add("hide");
        }
    }
    else{
        pencilOptions.classList.add("hide");
        activeTool = "eraser";
        ctx.strokeStyle = "white";
        ctx.lineWidth = currentEraserSize;
    }
})
