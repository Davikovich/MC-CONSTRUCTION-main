const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Quand on clique sur une image
document.querySelectorAll(".zoomable").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

// Quand on clique sur le bouton X
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Quand on clique en dehors de l’image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
