const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1025) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});





const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; // qaysi carddan boshlash
const totalCards = document.querySelectorAll('.card').length;
const visibleCards = 4; // bir vaqtda ko‘rinadigan cardlar soni

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // card + margin
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
