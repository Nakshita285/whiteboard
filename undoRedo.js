let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click", undoCanvas)

function undoCanvas(){
    // 1. pop the last line
    let undoLine = dB.pop();
    undoDB.push(undoLine);

    // 2. clear the Canvas  
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 3. redraw the lines -> get the lines from database
    reDrawLines();
}

function reDrawLines(){
    for(let i=0; i<dB.length;i++){
        let line = dB[i];
        if(line){
            for(let j=0; j<line.length; j++){
                let pointObject = line[j];
    
                if(pointObject.type == "mouseDown"){
                    ctx.lineWidth = pointObject.width;
                    ctx.strokeStyle = pointObject.color;
                    ctx.beginPath();
                    ctx.moveTo(pointObject.x, pointObject.y);
                }else{
                    ctx.lineTo(pointObject.x, pointObject.y);
                    ctx.stroke();
                }
            }
        }
    }
}

redo.addEventListener("click", redoCanvas)

function redoCanvas(){
    if(undoDB >=1){
        // 1. pop the line from undo Database
            let line = undoDB.pop();
            dB.push(line);
        // 2. redraw the canvas lines
        for (let i=0; i<dB.length; i++){
            let line = dB[i];
            if(line){
                
                for (let j=0; j<line.length; j++){
                    let pointObject = line[j];
        
                    if(pointObject.type =="mouseDown"){
                        ctx.lineWidth = pointObject.width;
                        ctx.strokeStyle = pointObject.color;
                        ctx.beginPath();
                        ctx.moveTo(pointObject.x, pointObject.y);
                    }else{
                        ctx.lineTo(pointObject.x, pointObject.y);
                        ctx.stroke();
                    }
                }
            }
        }
    }  
}
