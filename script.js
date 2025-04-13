// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.classList.toggle('dark', savedTheme === 'dark');

function toggleTheme() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Mobile Menu Functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    document.body.style.overflow = 'hidden';
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    document.body.style.overflow = '';
});

// Close menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        document.body.style.overflow = '';
    });
});

// Typing Animation
const typingText = document.getElementById('typing-text');
const texts = [
    "Backend Developer",
    "AI Enthusiast",
    "Game Developer"
];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
const pauseTime = 2000;

function type() {
    if (!typingText) return; // Exit if element not found
    
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex < currentText.length) {
        typingText.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
    } else if (isDeleting && currentCharIndex > 0) {
        typingText.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = pauseTime;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    setTimeout(type, typingSpeed);
}

// Start typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (typingText) {
        type();
    }
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index > 0) { // Skip the hero section
            section.classList.add('animate-fade-in');
            section.style.animationDelay = `${index * 0.2}s`;
        }
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 