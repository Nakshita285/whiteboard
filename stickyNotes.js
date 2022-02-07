let stickyNoteButton = document.querySelector("#stickynote");
let body = document.querySelector("body");

stickyNoteButton.addEventListener("click", function(e){
    openStickyNote();
});

function openStickyNote(element){
    let stickyNoteDiv = document.createElement("div");
    stickyNoteDiv.className = "sticky";
    if(element){
        stickyNoteDiv.innerHTML = `
        <div class="sticky-header">
            <div class="minimize"><img src="./NewIcons/minimize.png" /></div>
            <div class="close"><img src="./NewIcons/close.png"/></div>
        </div>
        <div class="sticky-content">
        </div>
        `
        stickyNoteDiv.querySelector(".sticky-content").append(element);
    }else{
        stickyNoteDiv.innerHTML = `
        <div class="sticky-header">
            <div class="minimize"><img src="./NewIcons/minimize.png" /></div>
            <div class="close"><img src="./NewIcons/close.png"/></div>
        </div>
        <div class="sticky-content">
            <textarea id="stickyNoteTextArea" placeholder="Type Here ..."></textarea>
        </div>`
    }
    
    
    body.appendChild(stickyNoteDiv);

    let stickyHeaderDiv = stickyNoteDiv.querySelector(".sticky-header");
    let isHolding = false;
    let initialX;
    let initialY;

    stickyHeaderDiv.addEventListener("mousedown", function(e){
        isHolding = true;
        let x = e.clientX;
        let y = e.clientY;
        initialX = x;
        initialY = y;
    });

    stickyHeaderDiv.addEventListener("mousemove", function(e){
        if(isHolding){
            let x = e.clientX;
            let y = e.clientY;
            let finalX = x;
            let finalY = y;

            let dx = finalX - initialX;
            let dy = finalY - initialY;

            let {top, left} = stickyNoteDiv.getBoundingClientRect();

            stickyNoteDiv.style.left = left + dx +"px";
            stickyNoteDiv.style.top = top + dy + "px";

            initialX = finalX;
            initialY = finalY;
           
        }  
    })

    stickyHeaderDiv.addEventListener("mouseup", function(e){
        isHolding = false;  
    })

    let closeButton = stickyNoteDiv.querySelector(".close");
    let minimizeButton = stickyNoteDiv.querySelector(".minimize");

    closeButton.addEventListener("click", function(){
        stickyNoteDiv.remove();
    })

    minimizeButton.addEventListener("click", function(){
        let stickyContentDiv = stickyNoteDiv.querySelector(".sticky-content");

        if(!stickyContentDiv.classList.contains("hide")){
            stickyContentDiv.classList.add("hide");
            stickyNoteDiv.classList.remove("sticky-show");
        }else{
            stickyContentDiv.classList.remove("hide");
            stickyNoteDiv.classList.add("sticky-show");
        }
        
    });  
}

