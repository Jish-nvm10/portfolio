// Contact form interaction
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out, Jishnu will contact you soon!");
  });
  
  // Navbar hide on scroll down, show on scroll up
  let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // scrolling up
    navbar.style.transform = "translateY(0)";
  } else {
    // scrolling down
    navbar.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
});
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
  