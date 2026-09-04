document.getElementById("year").textContent = new Date().getFullYear();

const sliderTrack = document.querySelector(".slider-track");
if (sliderTrack) {
  const slides = sliderTrack.querySelectorAll(".slide");
  const dotsWrap = document.getElementById("sliderDots");
  const prevBtn = document.querySelector(".slider-arrow.prev");
  const nextBtn = document.querySelector(".slider-arrow.next");

  slides.forEach((slide, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", "Ir a la captura " + (i + 1));
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    });
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll("button");

  function irASlide(index) {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    slides[clamped].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  prevBtn.addEventListener("click", () => {
    const actual = Math.round(sliderTrack.scrollLeft / sliderTrack.clientWidth);
    irASlide(actual - 1);
  });
  nextBtn.addEventListener("click", () => {
    const actual = Math.round(sliderTrack.scrollLeft / sliderTrack.clientWidth);
    irASlide(actual + 1);
  });

  let ticking = false;
  sliderTrack.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const actual = Math.round(sliderTrack.scrollLeft / sliderTrack.clientWidth);
      dots.forEach((d, i) => d.classList.toggle("active", i === actual));
      ticking = false;
    });
  });
}

const checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", function (event) {
  const url = this.dataset.checkoutUrl;
  if (!url || url === "PON_AQUI_TU_URL_DE_HOTMART") {
    event.preventDefault();
    alert("El checkout aún no está conectado. Sustituye PON_AQUI_TU_URL_DE_HOTMART por la URL real de Hotmart.");
  } else {
    this.href = url;
  }
});
