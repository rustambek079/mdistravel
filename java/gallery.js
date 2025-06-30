// script.js

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


// Tab switch
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const target = btn.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.classList.contains(`${target}-content`)) {
                content.classList.add('active');
            }
        });
    });
});

// // Modal functionality
// const modal = document.querySelector('.modal');
// const modalContent = document.querySelector('.modal-content');
// const closeBtn = document.querySelector('.close-btn');

// // For Images
// document.querySelectorAll('.photo-content img').forEach(img => {
//     img.addEventListener('click', () => {
//         modal.classList.add('show');
//         modalContent.innerHTML = `<img src="${img.src}" alt="">`;
//     });
// });

// // For Videos
// document.querySelectorAll('.video-content video').forEach(video => {
//     video.addEventListener('click', () => {
//         modal.classList.add('show');
//         modalContent.innerHTML = `<video src="${video.src}" controls autoplay></video>`;
//     });
// });

// // Close Modal
// closeBtn.addEventListener('click', () => {
//     modal.classList.remove('show');
//     modalContent.innerHTML = '';
// });