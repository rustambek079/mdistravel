const headerButtons = document.querySelectorAll('.header__btn');

function animateButtonsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    headerButtons.forEach((btn, index) => {
        const btnTop = btn.getBoundingClientRect().top;

        if (btnTop < triggerBottom) {
            btn.style.transitionDelay = `${index * 0.2}s`;
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
            btn.style.transitionDelay = `0s`;
        }
    });
}

window.addEventListener('scroll', animateButtonsOnScroll);
window.addEventListener('load', animateButtonsOnScroll);

// ==================================================================================== //

const cards = document.querySelectorAll('.main__section-card');

function showCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.style.transitionDelay = `${index * 0.2}s`;
            card.classList.add('show');
        } else {
            card.classList.remove('show');
            card.style.transitionDelay = `0s`;
        }
    });
}

window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);


// ==================================================================================== //




const data = {
    ohangaron: {
        title: "Ohangaron district",
        info: {
            consistsOf: "1929",
            population: "97,000 (2021)",
            languages: "Uzbek",
            area: "3,180 km²",
            center: "Ohangaron",
            timezone: "UTC+5 (UZT)"
        }
    },
    angren: {
        title: "Angren district",
        info: {
            consistsOf: "1946",
            population: "134,000 (2021)",
            languages: "Uzbek, Russian",
            area: "3100 km²",
            center: "Angren",
            timezone: "UTC+5 (UZT)"
        }
    },
    parkent: {
        title: "Parkent district",
        info: {
            consistsOf: "1933",
            population: "160,000 (2021)",
            languages: "Uzbek",
            area: "3050 km²",
            center: "Parkent",
            timezone: "UTC+5 (UZT)"
        }
    },
    bostanliq: {
        title: "Bostanliq district",
        info: {
            consistsOf: "1926",
            population: "190,000 (2021)",
            languages: "Uzbek",
            area: "4300 km²",
            center: "Gazalkent",
            timezone: "UTC+5 (UZT)"
        }
    }
};

const infoCard = document.getElementById("info-card");
const buttons = document.querySelectorAll(".section__information-btn");

function renderCard(id) {
    const { title, info } = data[id];
    infoCard.innerHTML = `
  <div class="section__information-titles">
      <h3 class="information-title">
      <img src="images/map.svg" alt="location" class="section__information-image">
      ${title}
      </h3>
      </div>
      <div class="section__information-boxes">
      <div class="section__information-box">
      <p class="section__information-text">Consists of:</p>
      <p class="section__information-txt">${info.consistsOf}</p>
      <p class="section__information-text">Population:</p>
      <p class="section__information-txt">${info.population}</p>
      <p class="section__information-text">Official languages:</p>
      <p class="section__information-txt">${info.languages}</p>
      </div>
      <div class="section__information-box">
      <p class="section__information-text">Area:</p>
      <p class="section__information-txt">${info.area}</p>
      <p class="section__information-text">Center:</p>
      <p class="section__information-txt">${info.center}</p>
      <p class="section__information-text">Time zone:</p>
      <p class="section__information-txt">${info.timezone}</p>
      </div>
      </div>
      `;
}

// Initial render
renderCard("ohangaron");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(".section__information-btn.active")?.classList.remove("active");
        btn.classList.add("active");
        const id = btn.dataset.id;
        renderCard(id);
    });
});


const infoCards = document.querySelectorAll('.section__information-card');

function showInfoCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    infoCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showInfoCardsOnScroll);
window.addEventListener('load', showInfoCardsOnScroll);



// ==================================================================================== //



const tripCards = document.querySelectorAll('.section__trip-card');

function showTripCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    tripCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showTripCardsOnScroll);
window.addEventListener('load', showTripCardsOnScroll);


// ==================================================================================== //


window.addEventListener("scroll", () => {
    document.querySelectorAll(".section__package-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            card.classList.add("rotate-animation");
        } else {
            card.classList.remove("rotate-animation");
        }
    });
})


// ==================================================================================== //


window.addEventListener('scroll', () => {
    document.querySelectorAll('.advantage-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            card.classList.add('scale-up');
        } else {
            card.classList.remove('scale-up');
        }
    });
});

window.dispatchEvent(new Event('scroll'));


// ==================================================================================== //


window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-left').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});

window.dispatchEvent(new Event('scroll'));





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





