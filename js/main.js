"use strict";
// Variables

let button = document.querySelectorAll(".button"),
  lightbox = document.querySelector(".lightbox"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next"),
  caption = document.querySelector("#caption"),
  closeLB = document.querySelector(".close");
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;
var count = 0,
  captions = ["Project 1", "Project 2", "Project 3", "Project 4"];

imgs[0].style.opacity = opacity;
// Functions
function openLightBox() {
  lightbox.style.display = "block";
}

function closeLightBox() {
  //console.log('clicked');
  lightbox.style.display = "none";
}
function imgClick(e) {
  //reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  //Change current image to src of clicked img
  current.src = e.target.src;
  // var position = e.target.index;
  // console.log(position);
  //caption.innerHTML = captions[pick];
  //Add fade-in class
  current.classList.add("fade-in");

  //remove fade-in class
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity
  e.target.style.opacity = opacity;
}
function prevImg() {
  count--;
  if (count < 0) {
    count = imgs.length - 1;
  }
  current.src = imgs[count].src;
  caption.innerHTML = captions[count];
}
function nextImg() {
  count++;
  if (count == imgs.length) {
    count = 0;
  }
  current.src = imgs[count].src;
  caption.innerHTML = captions[count];
}
// Event Listeners

closeLB.addEventListener("click", closeLightBox, false);
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", openLightBox, false);
}
imgs.forEach(img => img.addEventListener("click", imgClick));
prev.addEventListener("click", prevImg, false);
next.addEventListener("click", nextImg, false);
