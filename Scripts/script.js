let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
