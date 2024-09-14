window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const topSet = header.offsetTop;

  if (window.scrollY > topSet) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
});

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("hidden");
});

const sliders = document.querySelectorAll(".slider");

sliders.forEach((sliderContainer, index) => {
  const slider = sliderContainer;
  const slides = slider.children;
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Dapatkan tombol prev dan next berdasarkan card saat ini
  const prevBtn = sliderContainer.parentElement.querySelector(".prevBtn");
  const nextBtn = sliderContainer.parentElement.querySelector(".nextBtn");

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("scroll-image");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.remove("opacity-0");
          img.classList.add("opacity-100");
          observer.unobserve(entry.target); // Optional: stop observing after the image appears
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(img);
});
