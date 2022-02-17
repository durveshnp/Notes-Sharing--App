const dropZone = document.querySelector(".drop-zone");
const browseBtn = document.querySelector(".browseBtn");
const fileInpute = document.querySelector("#fileInput") 

dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();

    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
    }
    
});

dropZone.addEventListener("dragleave",()=>{
    dropZone.classList.remove("dragged");
})

dropZone.addEventListener("drop",(e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    console.log(files);
    if (files.length) {
        fileInpute.files = files;
    }
})

browseBtn.addEventListener("click",()=>{
    fileInpute.click();
})

const uploadFile = ()=>{
    const files = fileInpute.files[0];
    const formData = new FormData();
    formData.append(file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        
    };
}