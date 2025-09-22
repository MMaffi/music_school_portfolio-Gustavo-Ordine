// Menu responsivo
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Testimonial slider
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function goToSlide(slideIndex) {
    testimonialTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    // Update active dot
    sliderDots.forEach(dot => dot.classList.remove('active'));
    sliderDots[slideIndex].classList.add('active');
    
    currentSlide = slideIndex;
}

// Add click events to dots
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Auto slide
setInterval(() => {
    let nextSlide = (currentSlide + 1) % testimonialSlides.length;
    goToSlide(nextSlide);
}, 6000);

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Music notes animation
function createMusicNotes() {
    const notesContainer = document.getElementById('musicNotes');
    const notes = ['♪', '♫', '♩', '♬'];
    
    for (let i = 0; i < 15; i++) {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDelay = Math.random() * 15 + 's';
        note.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
        notesContainer.appendChild(note);
    }
}

createMusicNotes();

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Enlarge image
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    // Opens when clicking on the image or overlay
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", () => {
        const img = item.querySelector("img");
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        });
    });

    // Close by X
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close by clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
        lightbox.style.display = "none";
        }
    });
});