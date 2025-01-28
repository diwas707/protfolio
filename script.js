// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Responsive navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Animate projects on scroll
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.2 }
);

projects.forEach(project => observer.observe(project));
