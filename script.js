const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close");

const prevBtn =
document.querySelector(".prev");

const nextBtn =
document.querySelector(".next");

let currentIndex = 0;

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex = index;

        showImage();

        lightbox.style.display="flex";

    });

});

function showImage(){

    lightboxImg.src =
    galleryImages[currentIndex].src;

}

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        galleryImages.length - 1;

    }

    showImage();

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.style.display="none";

    }

});

/* Keyboard Support */

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display !== "flex")
        return;

    if(e.key === "ArrowRight"){

        nextBtn.click();

    }

    if(e.key === "ArrowLeft"){

        prevBtn.click();

    }

    if(e.key === "Escape"){

        lightbox.style.display="none";

    }

});