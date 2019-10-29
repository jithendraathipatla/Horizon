function openModal() {
  document.getElementById("myModal").style.display = "block";
  // document.getElementById("fixingthenav").style.display = "none";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  // document.getElementById("fixingthenav").style.display = "block";
}

function openModal1() {
  document.getElementById("myModal1").style.display = "block";
 
}

function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function floarplanH(){
  document.getElementById("myModal11").style.display = "block";
}


function floarplanH1(){
  document.getElementById("myModal12").style.display = "block";
}


function floarplanH2(){
  document.getElementById("myModal13").style.display = "block";
  
}

function closeModal1(){
  document.getElementById("myModal11").style.display = "none";
}

function closeModal12(){
  document.getElementById("myModal12").style.display = "none";
}

function closeModal13(){
  document.getElementById("myModal13").style.display = "none";
}

function floarplanE(){
  document.getElementById("myModalE").style.display = "block";
}

function floarplanE1(){
  document.getElementById("myModalE1").style.display = "block";

}

function floarplanE2(){
  document.getElementById("myModalE2").style.display = "block";
}

function floarplanE3(){
  document.getElementById("myModalE3").style.display = "block";
}

function closeModalE(){
  document.getElementById("myModalE").style.display = "none";
}

function closeModalE1(){
  document.getElementById("myModalE1").style.display = "none";
}

function closeModalE2(){
  document.getElementById("myModalE2").style.display = "none";
}

function closeModalE3(){
  document.getElementById("myModalE3").style.display = "none";
}



function floarplanS(){
  document.getElementById("myModalS").style.display = "block";
}

function floarplanS1(){
  document.getElementById("myModalS1").style.display = "block";

}

function floarplanS2(){
  document.getElementById("myModalS2").style.display = "block";
}

function floarplanS3(){
  document.getElementById("myModalS3").style.display = "block";
}

function closeModalS(){
  document.getElementById("myModalS").style.display = "none";
}

function closeModalS1(){
  document.getElementById("myModalS1").style.display = "none";
}

function closeModalS2(){
  document.getElementById("myModalS2").style.display = "none";
}

function closeModalS3(){
  document.getElementById("myModalS3").style.display = "none";
}




function show(){
  document.querySelector(".textabc").style.display="block";
}

function hide(){
  document.querySelector(".textabc").style.display="none";
}
