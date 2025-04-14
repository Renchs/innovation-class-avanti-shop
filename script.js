document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const result = document.getElementById("search-result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(e);
    
    const value = input.value.trim();

    console.log(value);
    

    if (value) {
      result.textContent = `Você buscou por: ${value}`;
      result.classList.remove("hidden");
    } else {
      result.classList.add("hidden");
    }

    input.value = "";
  });
});


const swiper = new Swiper(".container-carrousel .mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});


const swiperCards = new Swiper('.carrousel-card .swiper', {
  slidesPerView: 2,
  spaceBetween: 17,
  loop: true,

  breakpoints: {
    1320: { slidesPerView: 5 },
    1080: { slidesPerView: 4 },
    768: { slidesPerView: 3 }
  },

  pagination: { el: '.swiper-pagination' },
  navigation: { nextEl: '.button-next', prevEl: '.button-prev' },
  scrollbar: { el: '.swiper-scrollbar' },
});



document.querySelectorAll('.toggleLinks').forEach(button => {
  button.addEventListener('click', () => {
    const currentSection = button.closest('.footer-card-info-link');
    const isActive = currentSection.classList.contains('active');
    document.querySelectorAll('.footer-card-info-link').forEach(section => {
      section.classList.remove('active');
    });

    
    if (!isActive) {
      currentSection.classList.add('active');
    }
  });
});

