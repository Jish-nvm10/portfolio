// Contact form interaction
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out, Jishnu will contact you soon!");
});

// Navbar hide on scroll (optional, works with fixed position)
let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;
  navbar.style.transform = (prevScrollPos > currentScrollPos) ? "translateY(0)" : "translateY(-100%)";
  prevScrollPos = currentScrollPos;
});

// Typing animation for subtitle under name
const subtitleElement = document.getElementById("subtitle-typing");
const roles = [
  "Software Developer",
  "Tech Enthusiast",
  "Creative Coder",
  "UI/UX Explorer",
  "Full Stack Learner",
  "Debugging Addict",
  "Design Thinker",
  "Frontend Fanatic",
  "Problem Solver",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeSubtitle() {
  const currentRole = roles[roleIndex];
  if (!isDeleting) {
    subtitleElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeSubtitle, 1000); // pause at full word
      return;
    }
  } else {
    subtitleElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeSubtitle, isDeleting ? 50 : 100);
}

typeSubtitle();