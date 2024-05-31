let headingPara = document.querySelector('#myHeading');
let myName = document.querySelector('#myName');

let paraGraph = document.querySelector('.extra-show');

let seeMore = document.querySelector('#seeMore');

window.addEventListener("load",()=>{
    headingPara.classList.remove('back');
    setTimeout(()=>{
        myName.classList.remove('sideGo');
        paraGraph.style.opacity = "1";
    },300)
})

seeMore.addEventListener("click",()=>{
    window.location.assign("../update_Portfolio/about.html");
})