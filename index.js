let wrapper = document.querySelector('.wrapper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeLabel = document.querySelector('.activecricle').querySelectorAll('.fa-circle');
let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');


let indexNo = 0;
nextBtn.onclick = () => {
    indexNo++;
    changeBox();

}
preBtn.onclick = () => {
    indexNo--; 
    changeBox();
}

let changeBox = () => {
    if (indexNo > activeBox.length-1) {
        indexNo = 0;
    }
    else if (indexNo < 0) {
        indexNo = activeBox.length -1;
    }

    for (let i = 0; i < activeBox.length; i++) {
        if (i === indexNo) {
            activeBox[i].classList.add('active');
            activeLabel[i].classList.add('fa-solid');

            wrapper.style.transform = `translateX(${indexNo* -250}px)`;
        }
        else {
            activeBox[i].classList.remove('active');
            activeLabel[i].classList.remove('fa-solid');
        }
        
} 

}