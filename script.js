document.addEventListener("DOMContentLoaded", () => {
  // Init EmailJS
  (function() {
    emailjs.init("WoY4kskosib-svC8s"); 
  })();

  // Typed.js setup
  var typed = new Typed("#element", {
    strings: [
      "Status: Portfolio is still compiling... ⏳",
      "Co-op & Internship Ready",
      "Always Building Something New 🙂"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });

  // Handle form submission
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const service_id = "service_lejqscm";
      const template_id = "template_7elpoft";

      emailjs.sendForm(service_id, template_id, this, "WoY4kskosib-svC8s")
        .then(() => {
          alert("Message sent!");
          form.reset();
        })
        .catch((error) => {
          console.error(error);
          alert("Error, try again!");
        });
    });
  }

  // Fade-in animation
  const faders = document.querySelectorAll(".fade-in, .fade-in-subtitle");
  const appearOptions = { threshold: 0.2 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
