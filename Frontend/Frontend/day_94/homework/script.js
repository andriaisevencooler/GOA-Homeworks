let index = 1;
const showSlides = () => {
    const slides = document.querySelectorAll('.images');
    slides.forEach(slide => slide.style.display = "none");
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
}

const changeSlide = (num) => {
    const slides = document.querySelectorAll('.images');
    index = (index + num + slides.length) % slides.length;
    showSlides()
}

showSlides()
setInterval(showSlides, 3000)