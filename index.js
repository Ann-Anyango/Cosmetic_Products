function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

const images = document.querySelectorAll('.image');
images.forEach((image) => {
  image.classList.add('new-position');
});

// document.addEventListener("DOMContentLoaded", function(event) {
//   var slides = document.getElementsByClassName("flex");
//   var currentIndex = 0;

//   setInterval(function() {
//     // Hide the current slide
//     slides[currentIndex].style.left = "-100%";

//     // Calculate the index of the next slide
//     currentIndex = (currentIndex + 1) % slides.length;

//     // Show the next slide
//     slides[currentIndex].style.left = "0";
//   }, 3000); // Change slide every 3 seconds
// });

