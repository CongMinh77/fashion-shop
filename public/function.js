//Scroll on Top

var mybutton = document.getElementById("myBut");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*var header = document.getElementByClassName("roll-menu");
window.onscroll = function(){
 if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    header.style.position = "fixed";
  } else {
    header.style.position = "relative";
  }
};*/

var slideIndex = 1;
// if want auto slide show change: var slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("outside-pr");
  // and you must comment line 44 to 50
  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n<1)
  {
    slideIndex = slides.length
  }
  for(i=0; i<slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  /*
  if want auto slide show add this line

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  
  setTimeout(showSlides, 10000);
  */
  slides[slideIndex-1].style.display = "block";
}

$(document).ready(function(){
  $("#button-select").click(function(){
    $(".dropdown-select").css({"display":"block"});
      $(".style-menu").click(function(){

      var i = $(this).text();
      
      $("#choice").text("");
      $("#choice").text(i);

      $(".dropdown-select").css({"display":"none"});
    });
  });
});