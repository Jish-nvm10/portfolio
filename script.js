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
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
  });