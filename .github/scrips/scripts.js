// Activate the ScrollTrigger plugin so we can use it
gsap.registerPlugin(ScrollTrigger);

// Loop through every element with the class "section"
gsap.utils.toArray(".section").forEach(section => {

  // Loop through every element with the class "section"
  gsap.to(section, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",

    // ScrollTrigger handles when the animation happens based on scroll
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // Start the animation when the top of the section reaches 80% down the viewport
      //end: "top 30%", //(Optional?) end point — only really used if you want animation tied to scrolling
      toggleActions: "play none none none",
      // What to do when entering/leaving the trigger area:
      // play on enter, do nothing on leave/back

      markers: true, //shows marker on where start and end is. Removes later
    }
  });
});

document.getElementById('evil').addEventListener('click', function () {
  this.classList.add('walk'); // Adds the animation class
});

