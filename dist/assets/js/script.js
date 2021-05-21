const bars = document.querySelector('.bars');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav-mobile');
const navChild = nav.children;
console.log(navChild);

bars.addEventListener('click' , () =>  {
    nav.style.transform = "translateX(0)";
    nav.style.opacity = "1";
});

close.addEventListener('click' , () => {
    nav.style.transform = "translateX(100%)";
    nav.style.opacity = "0";
})

for(let i = 0 ; i < navChild.length ; i++ ) {
    navChild[i].addEventListener('click' , () => nav.style.transform = "translateX(100%)");
}

