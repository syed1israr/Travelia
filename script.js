const scroll = new LocomotiveScroll({
    el: document.querySelector('.locomotive'),
    smooth: true
});

const preloader=document.querySelector("[data-preloader]");
window.addEventListener("load",()=>{
    preloader.classList.add("remove");
})
const manyEvents=function(elements, eventType,callback){
    for(var i=0, len=elements.length;i<len ; i++){
        elements[i].addEventListener(eventType,callback);
    }
}

const navbar=document.querySelector(".navbar");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector("[data-overlay]");

const ToggleNav=function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
manyEvents(navTogglers,"click",ToggleNav);


const header=document.querySelector(".header");
window.addEventListener("scroll", function(){
    header.classList[this.window.scrollY>100?"add" : "remove"]("active");
})