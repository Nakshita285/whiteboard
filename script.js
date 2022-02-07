let canvas = document.querySelector('#canvas');
let {top:canvasTop} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;

canvas.addEventListener('resize', function(){
    canvas.height = window.innerHeight - canvasTop;
    canvas.width = window.innerWidth;
    redrawLines();
})


let isMouseDown = false;
let ctx = canvas.getContext('2d');
ctx.lineCap = 'round';

let dB = [];
let undoDB = [];
let line = [];


canvas.addEventListener('mousedown', function(e){
    if(undoDB.length >0){
        undoDB =[];
    }
    isMouseDown = true;
    let x= e.clientX;
    let y= e.clientY - canvasTop;
// beginPath and move to are functions from the canvas
    ctx.beginPath();        // begin path
    ctx.moveTo(x, y);   //move the pointer to coordinates

    // line object for undo and redo operations
    let lineObj = {
        type: "mouseDown",
        x: x,
        y: y,
        color: ctx.strokeStyle,
        width: ctx.lineWidth
    }
    line.push(lineObj);
})

canvas.addEventListener('mousemove', function(e){
    if(isMouseDown){
        let x= e.clientX;
        let y= e.clientY - canvasTop;
        ctx.lineTo(x,y);
        ctx.stroke();

        let lineObj = {
            type: "mouseMove",
            x:x,
            y:y
        }
        line.push(lineObj);
    }

})

canvas.addEventListener('mouseup', function(e){
    isMouseDown =false;
    let lineObj = {
        type: "mouseUp",
        x:e.clientX,
        y:e.clientY - canvasTop
    }
    line.push(lineObj);
    dB.push(line);
    line=[];
    console.log(dB);
})

