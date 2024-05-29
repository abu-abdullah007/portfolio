let toggleButton = document.querySelector('#show-list-nav');

let hiddenNav = document.querySelector('.hidden-nav');

let mainNav = hiddenNav.querySelector('.hidden-nav-center');

let crossButton = document.querySelector('#myBtnCross');

let themeButton = document.querySelector('#themeButton');

let rootBody = document.body;






toggleButton.addEventListener("click",()=>{
    hiddenNav.classList.remove('hide');
    setTimeout(()=>{
        mainNav.classList.add('slow');
    },30)
});

crossButton.addEventListener("click",()=>{
    mainNav.classList.remove('slow');
    mainNav.classList.add('reverse');
    setTimeout(()=>{
        hiddenNav.classList.add('hide');
        mainNav.classList.remove('reverse');
    },1000);
});


themeButton.addEventListener("click",()=>{
    rootBody.classList.toggle('theme');
})