document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const radios = document.querySelectorAll('input[type="radio"]');
  const autoBtns = document.querySelectorAll(".navigation-auto div");
  const intervalTime = 3000; // Intervalo de tempo para troca automática dos slides

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.style.marginLeft = `-${index * 100}%`;
    radios.forEach((radio, idx) => {
      radio.checked = idx === index;
    });
    autoBtns.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % radios.length;
    showSlide(currentSlide);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      stopSlideShow();
      currentSlide = index;
      showSlide(currentSlide);
      startSlideShow();
    });
  });

  autoBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      stopSlideShow();
      currentSlide = index;
      showSlide(currentSlide);
      startSlideShow();
    });
  });

  // Inicia o slideshow automático
  startSlideShow();
});

document.getElementById('Login').addEventListener('click', function() {
  window.location.href = 'https://johnpaz01.github.io/SITE-PCE-CSS/Login/index.html'; // Substitua pela URL desejada
});
