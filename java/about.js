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


// document.addEventListener('DOMContentLoaded', () => {
//   const modal = document.getElementById('videoModal');
//   const openBtn = document.getElementById('openModal');
//   const closeBtn = document.querySelector('.close');
//   const player = document.getElementById('youtubePlayer');

//   const videoID = "asssasasasaasasas";
//   const videoURL = `https://www.youtube.com/embed/${videoID}?autoplay=1`;

//   let videoLoaded = false;

//   openBtn.addEventListener('click', () => {
//     if (!videoLoaded) {
//       player.src = videoURL;
//       videoLoaded = true;
//     }
//     modal.style.display = 'flex';
//   });

//   function closeModal() {
//     modal.style.display = 'none';
//     player.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//   }

//   closeBtn.addEventListener('click', closeModal);

//   window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       closeModal();
//     }
//   });
// });

const infoText = document.getElementById('infoText');

infoText.addEventListener('click', () => {
  infoText.classList.toggle('open');
});



