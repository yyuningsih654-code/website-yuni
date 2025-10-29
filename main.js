// Smooth scroll menu
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Validasi form contact
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    e.preventDefault();
    alert("Harap isi semua field!");
  }
});

// Tombol Lihat Project (popup sederhana)
const projectButtons = document.querySelectorAll(".project-button");
projectButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Ini nanti bisa diganti modal detail project!");
  });
});
