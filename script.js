// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer Animations

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// Particle Effects

const particles = []; // Array to hold particle objects
function createParticle(x, y) {
    particles.push({ x, y, size: Math.random() * 5 + 1 });
}
// Simple animation loop
function animateParticles() {
    requestAnimationFrame(animateParticles);
    // Animation logic goes here
}

// Navbar Scroll Effects

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Start particle animation
animateParticles();
