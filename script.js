const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const servicesTrack = document.getElementById("servicesTrack");
const servicesPrev = document.getElementById("servicesPrev");
const servicesNext = document.getElementById("servicesNext");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Gracias por tu mensaje. Te contactaremos muy pronto.";
    contactForm.reset();
  });
}

if (servicesTrack && servicesPrev && servicesNext) {
  const updateCarouselButtons = () => {
    const maxScrollLeft = servicesTrack.scrollWidth - servicesTrack.clientWidth;
    servicesPrev.disabled = servicesTrack.scrollLeft <= 4;
    servicesNext.disabled = servicesTrack.scrollLeft >= maxScrollLeft - 4;
  };

  const getScrollStep = () => {
    if (!servicesTrack.clientWidth) {
      return 320;
    }

    return servicesTrack.clientWidth;
  };

  servicesPrev.addEventListener("click", () => {
    servicesTrack.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  });

  servicesNext.addEventListener("click", () => {
    servicesTrack.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  });

  servicesTrack.addEventListener("scroll", updateCarouselButtons);
  window.addEventListener("resize", updateCarouselButtons);
  updateCarouselButtons();
}
