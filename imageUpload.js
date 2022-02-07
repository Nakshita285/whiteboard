let photoUploadButton = document.querySelector("#photoUpload");
let photoInput = document.querySelector(".photoInput");

let downloadButton = document.querySelector("#download");

photoUploadButton.addEventListener("click", function(){
    photoInput.click();
})

photoInput.addEventListener("change", function(e){
    let photoObject = e.target.files[0];
    // console.log(photoObject);
    let imageURL = URL.createObjectURL(photoObject);
    // console.log(imageURL);

    let imgTag = document.createElement("img");
    imgTag.src = imageURL;
    imgTag.classList.add("imgUpload");
    openStickyNote(imgTag);
})

download.addEventListener("click", function(e) {
    let downloadImageUrl = canvas.toDataURL({type:"image/png"});
    let aTag = document.createElement("a");
    aTag.href = downloadImageUrl;
    aTag.download = "image.png";
    aTag.click()
})