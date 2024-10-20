

$(document).ready(function() {
  $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  }); 
} );

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  section.scrollIntoView({
    behavior: 'smooth'
  });
}

function removeActiveClass() {
  $('.header__burger, .header__menu').removeClass('active');
  $('body').removeClass('lock');
}


document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.choos__card');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentSlide = 0;

  function showSlide(index) {
      cards.forEach((card, i) => {
          card.classList.remove('active');
          if (i === index) {
              card.classList.add('active');
          }
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % cards.length;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + cards.length) % cards.length;
      showSlide(currentSlide);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Initial display of the first slide
  showSlide(currentSlide);

  // Ensure that controls only appear on small screens
  window.addEventListener('resize', function() {
      const sliderControls = document.querySelector('.choos__slider-controls');
      if (window.innerWidth <= 1170) {
          sliderControls.style.display = 'flex';
      } else {
          sliderControls.style.display = 'none';
          cards.forEach(card => card.classList.add('active')); // Show all cards on larger screens
      }
  });

  // Trigger resize to set initial state
  window.dispatchEvent(new Event('resize'));
});