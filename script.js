// =============================
// ArsalanAkhtar.com — interactions
// =============================

// Replace this with the email address where you want audit requests delivered.
const BUSINESS_EMAIL = "hello@arsalanakhtar.com";

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("mobile-open");
    menuToggle.textContent = open ? "×" : "☰";
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const subject = `Growth Audit Request — ${data.get("name") || "New Prospect"}`;

  const body = [
    `Name: ${data.get("name") || ""}`,
    `Work email: ${data.get("email") || ""}`,
    `Brand website: ${data.get("website") || ""}`,
    `Currently running Meta Ads: ${data.get("running") || ""}`,
    `Monthly Meta Ads spend: ${data.get("spend") || ""}`,
    "",
    "What they want to improve:",
    data.get("message") || ""
  ].join("\n");

  window.location.href =
    `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
