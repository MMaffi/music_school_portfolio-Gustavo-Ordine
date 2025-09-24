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