// ===== Highlight active menu link on scroll =====
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
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

// ===== Smooth scroll for nav links =====
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Resume Download Button =====
const resumeBtn = document.createElement("a");
resumeBtn.href = "PayalSawant_Resume.pdf";  // Place your PDF in the same folder
resumeBtn.download = "Payal_Sawant_Resume.pdf";
resumeBtn.innerHTML = '<button class="btn2">Download Resume</button>';
document.querySelector(".content").appendChild(resumeBtn);
