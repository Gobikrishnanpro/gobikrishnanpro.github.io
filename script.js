// Typewriter effect
const texts = ["Java Full Stack Prodigy", "Code Architect", "Innovation Driver", "Tech Visionary"];
let index = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < texts[index].length) {
        typewriterElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 40);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 300);
    }
}

// Particles.js config
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#20c997" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#9333ea", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Modal functions
function openModal(projectId) {
    const modal = document.getElementById("modal");
    const details = document.getElementsByClassName("modal-detail");
    for (let detail of details) detail.classList.add("hidden");
    document.getElementById(projectId).classList.remove("hidden");
    modal.classList.remove("hidden");
    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("hidden"), 300);
}

// Scroll animations
const scrollElements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.2 });

scrollElements.forEach(el => observer.observe(el));

// Navbar shrink on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scroll and init
document.addEventListener("DOMContentLoaded", () => {
    type();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});