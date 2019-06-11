const slides = document.getElementsByClassName("slide");
const contform = document.getElementById("form");
var slideIndex = 1;

var timer= {} ;

showSlides(slideIndex);

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  clearInterval(timer);
  showSlides(slideIndex += n);
  Timer();
}

function autoSlider() {
  Timer();
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
}

function Timer() {
  timer = setInterval(function () {
    changeSlide(1)
  }, 4000);
}

autoSlider();

function contactForm() {
  contform.style.display = ("block");
}

function exitForm() {
  contform.style.display = ("none");
}