//* Preload *// 
document.addEventListener("DOMContentLoaded", function() {
  var preload = document.getElementById("preload");
  preload.classList.add("hide");

  setTimeout(function() {
    preload.style.display = "none";
  }, 1000);
});

//* Menu *//
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  menu.classList.toggle('active');
  
  if (button.classList.contains('active')) {
    button.innerHTML = '<i class="bx bx-x"></i>';
  } else {
    button.innerHTML = '<i class="bx bx-menu"></i>';
  }
})

//* Music *//
const video = document.getElementById('bmw');
const play = document.getElementById('play');

play.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    play.innerHTML = '<i class="bx bx-volume-full"></i>';
  } else {
    video.muted = true;
    play.innerHTML = '<i class="bx bx-volume-mute"></i>';
  }
});