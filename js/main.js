'use strict';
// Variables

// var y = window.scrollY
// console.log(y);
// var nav = document.querySelectorAll('.nav-btn');
// var arrowBtn1 = document.querySelector('#arrow-btn');
// document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
var blakeWork = document.querySelector('#blake-work'),
daniWork = document.querySelector('#dani-work'),
lightbox = document.querySelector('.lightbox'),
portfolio = document.querySelectorAll('.blakePort'),
lightboxd = document.querySelector('.d'),
currentSource,
closeLightB = document.querySelector('.close-lightbox');
// about us 855px end page 1636px

// Functions
function openLightBox(e) {
    var id = this.id;
    console.log(id);
    // var currentSource = portfolio.currentSrc;
    // console.log(currentSource);
        lightbox.classList.add('show-lightbox');
    }
    

function closeLightBox() {
    //console.log('clicked');
    lightbox.classList.remove('show-lightbox');
}
// function scrollIntoView(){
//     console.log('clicked');
//     behavior: 'smooth';
// }
// function scroll(e){
//    // console.log('clicked');
//     var navBtn = this.id;
//     //console.log(navBtn);
//     if (navBtn == 'home') {
//         // scrollTo(0, 0, (behavior: 'smooth');
//         window.scroll({
//             top: 0, 
//             left: 0, 
//             behavior: 'smooth' 
//           });
//     }else if (navBtn == 'about') {
//         // scrollTo(0, 855);
//         window.scroll({
//             top: 855, 
//             left: 0, 
//             behavior: 'smooth' 
//           });
//     }
// }



// Event Listeners
blakeWork.addEventListener('click', openLightBox, false);
daniWork.addEventListener('click', openLightBox, false);

closeLightB.addEventListener('click', closeLightBox, false);
// for (var i = 0; i < nav.length; i++) {
//     nav[i].addEventListener('click', scroll, false);
    
// }
// arrowBtn1.addEventListener('click', scrollIntoView, false);