function redirect() { 
    location.replace("https://www.apple.com/store"); 
} 

let scrollContainer = document.querySelector(".contents");
let backBtn = document.getElementById(".left-arrow");
let nextBtn = document.getElementById(".right-arrow");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 1500;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 1500;
});