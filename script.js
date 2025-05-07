// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  

  function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const button = document.querySelector('.hamburger');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  }
  
