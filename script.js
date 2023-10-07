// logo slider
let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

let copy2 = document.querySelector(".page-9-wrapper").cloneNode(true);
document.querySelector(".testimonials-slider").appendChild(copy2);

// page-4-menu 
let option = document.querySelectorAll(".page-4-card");

option.forEach((e)=> {
    e.addEventListener("click",()=>{
        option.forEach((f)=> {
            f.classList.remove("page-4-card-active");
        });
        e.classList.toggle("page-4-card-active");
    });
});

// video toggle
let card1 = document.querySelector("#card-1");
let card2 = document.querySelector("#card-2");
let card3 = document.querySelector("#card-3");
let vid1 = document.querySelector("#vid-1");
let vid2 = document.querySelector("#vid-2");
let vid3 = document.querySelector("#vid-3");
let vidCard = document.querySelectorAll(".page-4-video");

card1.addEventListener("click", ()=> {
    vidCard.forEach((e)=> {
        e.classList.add("display-none");
    })
    vid1.classList.remove("display-none");
})
card2.addEventListener("click", ()=> {
    vidCard.forEach((e)=> {
        e.classList.add("display-none");
    })
    vid2.classList.remove("display-none");
})
card3.addEventListener("click", ()=> {
    vidCard.forEach((e)=> {
        e.classList.add("display-none");
    })
    vid3.classList.remove("display-none");
})