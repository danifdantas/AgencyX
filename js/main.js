"use strict";
// Variables

let button = document.querySelectorAll(".button"),
  lightbox = document.querySelector(".lightbox"),
  closeLB = document.querySelector(".close");

var slides = document.querySelector(".mySlides"),
  slide = document.querySelectorAll(".slides"),
  demo = document.querySelectorAll(".demo"),
  caption = document.querySelector("#caption"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  pick = 1;
showSlides(pick);

// Functions
function openLightBox() {
  lightbox.style.display = "block";
}

function closeLightBox() {
  //console.log('clicked');
  lightbox.style.display = "none";
}
function currentSlide(e) {
  var pick = this.dataset.pick;
  //console.log(pick);
  showSlides(pick);
}

function prevSlides(e) {
  var pick = this.dataset.pick;
  showSlides(pick);
}
function showSlides(n) {
  var i;
  console.log(pick);
  // if (n > slides.length) {
  //   slideIndex = 1;
  // }
  // if (n < 1) {
  //   slideIndex = slides.length;
  // }
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // for (i = 0; i < demo.length; i++) {
  //   demo[i].className = demo[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "block";
  // demo[slideIndex - 1].className += " active";
  // caption.innerHTML = demo[slideIndex - 1].alt;
}

// Event Listeners

closeLB.addEventListener("click", closeLightBox, false);
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", openLightBox, false);
}
prev.addEventListener("click", prevSlides, false);
next.addEventListener("click", prevSlides, false);
demo.forEach(demo => demo.addEventListener("click", currentSlide));
