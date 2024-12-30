const carousel = document.querySelector(".carousel1");
const items = document.querySelectorAll(".carousel-item1");
let currentIndex = 0;

function moveToNext() {
  if (currentIndex === items.length - 3) {
    // Stop when only 3 items are left
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const offset = -currentIndex * 33.33; // Move by one item width (33.33%)
  carousel.style.transform = `translateX(${offset}%)`;
}

// Autoplay every 3 seconds
setInterval(moveToNext, 3000);
//back to top scroll position
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");
  const scrollThreshold = 300; // Show button after 300px of scrolling

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      backToTopButton.style.display = "flex";
      backToTopButton.classList.add("bounce");
    } else {
      backToTopButton.style.display = "none";
      backToTopButton.classList.remove("bounce");
    }
  });

  // Scroll back to the top
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//navbar function
const icon = document.querySelector(".icon");
const navBody = document.querySelector(".nav-body");
console.log(icon);

const NavBarToggle = () => {
  console.log("toggled");
};
icon.addEventListener("click", () => {
  navBody.classList.toggle("active");
});
