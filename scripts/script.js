// Activate the ScrollTrigger plugin so we can use it
gsap.registerPlugin(ScrollTrigger);

// Loop through every element with the class "section"
gsap.utils.toArray(".section").forEach(section => {

  // Loop through every element with the class "section"
  gsap.to(section, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",

    // ScrollTrigger handles when the animation happens based on scroll
    scrollTrigger: {
      trigger: section,
      start: "top 50%", // Start the animation when the top of the section reaches 80% down the viewport
      //end: "top 30%", //(Optional?) end point — only really used if you want animation tied to scrolling
      toggleActions: "play none none none",
      // What to do when entering/leaving the trigger area:
      // play on enter, do nothing on leave/back

      markers: true, //shows marker on where start and end is. Removes later
    }
  });
});

gsap.to("#seed", {
  x: 5,
  rotation: 5,
  duration: 0.25,
  repeat: -1, // Infinite
  yoyo: true, // Alternate back and forth
  ease: "sine.inOut"
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the young plant container
  const youngPlant = document.getElementById("young");
  
  // Get ALL paths inside it (then filter by color if needed)
  const allPaths = youngPlant.querySelectorAll("path");
  
  // Filter only green leaves (or use all paths for testing)
  const leaves = Array.from(allPaths).filter(path => 
    path.getAttribute("fill") === "#a0d18a" || 
    path.style.fill === "rgb(160, 209, 138)"
  );

  console.log(`Found ${leaves.length} leaves to animate`); // Debug count

  // Animate each leaf
  leaves.forEach((leaf, index) => {

    // Set transform origin to leaf base
    gsap.set(leaf, { 
      transformOrigin: "50% 100%",
      rotation: index % 2 ? -2 : 2 // Small initial rotation
    });

    // Create unique sway animation
    gsap.to(leaf, {
      rotation: index % 2 ? 5 : -5, // Alternate directions
      duration: 2 + Math.random() * 2, // 2-4 seconds
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.1
    });
  });
});


document.getElementById('evil').addEventListener('click', function () {
  this.classList.add('walk'); // Adds the animation class
});

