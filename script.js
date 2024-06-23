const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 10)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

function themeFunction(theme){
    var element =  document.body;
    element.classList.toggle("light-mode")

    if(!theme.className.includes("bxs-moon")){
        theme.classList.toggle("bxs-moon")
        theme.classList.remove("bxs-sun")
    }
    else{
        theme.classList.add("bxs-sun")
        theme.classList.remove("bxs-moon")
    }
}