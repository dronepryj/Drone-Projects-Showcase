let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } 
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

// Initialize carousel
showSlides();

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
