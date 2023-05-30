const images = document.querySelectorAll('.images img');

images.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.animation = 'none'; 
    void img.offsetWidth; 
    img.style.animation = 'spin 3s ease-in-out'; 
  });
});