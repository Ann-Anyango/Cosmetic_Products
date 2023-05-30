
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
  }
  
  var imageFolder = "/images/";
  var images = ["supa3.png", "facemakeup.webp", "supa4.png", "mouthlip.webp"];
  var currentIndex = 0;
  var myDiv = document.getElementById("myDiv");
  
  function preloadImages() {
    for (var i = 0; i < images.length; i++) {
      var imageUrl = imageFolder + images[i];
      var img = new Image();
      img.src = imageUrl;
    }
  }
  
  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    var imageUrl = imageFolder + images[currentIndex];
    myDiv.style.backgroundImage = "url(" + imageUrl + ")";
  }
  
  // Preload images before setting the initial background image
  preloadImages();
  
  // Set the initial background image
  var initialImageUrl = imageFolder + images[0];
  myDiv.style.backgroundImage = "url(" + initialImageUrl + ")";
  
  // Start changing background images after 5 seconds
  setInterval(changeBackgroundImage, 5000);
  
  function toggleMenu() {
      var navbar = document.querySelector('.navbar');
      navbar.classList.toggle('collapsed');
    }
   
    
  