let headingPara = document.querySelector('#myHeading');
let myName = document.querySelector('#myName');

let paraGraph = document.querySelector('.extra-show');

window.addEventListener("load",()=>{
    headingPara.classList.remove('back');
    setTimeout(()=>{
        myName.classList.remove('sideGo');
        paraGraph.style.opacity = "1";
    },300)
})