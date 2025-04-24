// Reveal sections on scroll
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
  
    reveals.forEach(section => {
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (sectionTop < windowHeight - revealPoint) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealSections);
  window.addEventListener('load', revealSections);
  
  // Highlight active nav link
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  
  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  