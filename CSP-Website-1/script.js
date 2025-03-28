
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-inner');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let currentSlide = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });

  // Auto-advance slides every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }, 5000);
});
