document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.info_section');
  const startInstruction = document.querySelector('.start-instruction');
  const startArea = document.querySelector('.start-instruction'); // Area to click on to start slideshow
  let currentIndex = 0;
  const totalSections = sections.length;
  let slideInterval = null;
  let hasStarted = false;

  function showNextSlide() {
    if (currentIndex === totalSections - 1) {
      clearInterval(slideInterval);
      return;
    }

    sections[currentIndex].classList.remove('active');

    setTimeout(() => {
      sections[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % totalSections;
      sections[currentIndex].style.display = "flex";
      setTimeout(() => {
        sections[currentIndex].classList.add('active');
      }, 50);
    }, 1000);
  }

  function startSlideshow() {
    if (hasStarted) return;
    hasStarted = true;

    // Remove "Click anywhere to begin" text
    if (startInstruction) {
      startInstruction.style.display = 'none';
    }

    // Start slideshow
    slideInterval = setInterval(showNextSlide, 7000);
    showNextSlide();
  }

  // Show the first "Did you know?" section
  sections[currentIndex].style.display = "flex";
  setTimeout(() => {
    sections[currentIndex].classList.add('active');
  }, 50);

  // Start slideshow when the specified area is clicked
  startArea.addEventListener('click', startSlideshow);
});