function openModal() {
  document.getElementById("myModal").style.display = "block";
  // document.getElementById("fixingthenav").style.display = "none";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  // document.getElementById("fixingthenav").style.display = "block";
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
  
  captionText.innerHTML = dots[slideIndex-1].alt;
}



function openFloorModal() {
  document.getElementById("myFloorModal").style.display = "block";
  // document.getElementById("fixingthenav").style.display = "none";
}

// Close the Modal
function closeFloorModal() {
  document.getElementById("myFloorModal").style.display = "none";
  // document.getElementById("fixingthenav").style.display = "block";
}

var slideIndexofFloor = 1;
showFloorSlides(slideIndexofFloor);

// Next/previous controls
function plusFloorSlides(n) {
  console.log("Hi")
  showFloorSlides(slideIndexofFloor += n);
}

// Thumbnail image controls
function currentFloorSlide(n) {
  showFloorSlides(slideIndexofFloor = n);
}

function showFloorSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myFloorSlides");
  if (n > slides.length) {slideIndexofFloor = 1}
  if (n < 1) {slideIndexofFloor = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexofFloor-1].style.display = "block";
  
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


let win = $(window).width();
if(win < 420){
  $('#bc').click(function(){
    console.log("hi");
    $('html, body').animate({scrollTop:1250}, 'slow');
    return false;
  });
  $('#fg').click(function(){
    $('html, body').animate({scrollTop:4660}, 'slow');
    return false;
  });
  
  
  $('#ef').click(function(){
    $('html, body').animate({scrollTop:4050}, 'slow');
    return false;
  });
  
  $('#ij').click(function(){
    $('html, body').animate({scrollTop:2350}, 'slow');
    return false;
  });
  
  
  $('#cd').click(function(){
    $('html, body').animate({scrollTop:2000}, 'slow');
    return false;
  });
}
else {
$('#fg').click(function(){
  $('html, body').animate({scrollTop:2060}, 'slow');
  return false;
});


$('#ef').click(function(){
  $('html, body').animate({scrollTop:1650}, 'slow');
  return false;
});

$('#ij').click(function(){
  $('html, body').animate({scrollTop:1300}, 'slow');
  return false;
});


$('#cd').click(function(){
  $('html, body').animate({scrollTop:1000}, 'slow');
  return false;
});
}
