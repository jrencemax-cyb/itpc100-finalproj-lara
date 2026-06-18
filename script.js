function trackInternet() {
  let plan = prompt("Enter monthly internet fee:");
  let months = prompt("Enter number of months:");
  if (!plan ||!months) return;
  let total = Number(plan) * Number(months);
  alert("Total Internet Subscription Cost: ₱" + total);
}

let currentIndex = 0;

function openAlbum() {
  document.querySelector(".gallery-album").style.display = "none";
  document.getElementById("galleryContent").classList.add("active");
  window.scrollTo({ top: document.getElementById("gallery").offsetTop, behavior: 'smooth' });
}

function closeAlbum() {
  document.querySelector(".gallery-album").style.display = "block";
  document.getElementById("galleryContent").classList.remove("active");
}

function showImage(src) {
  const imgs = Array.from(document.querySelectorAll("#galleryContent img"));
  currentIndex = imgs.findIndex(img => img.src === src);
  document.getElementById("fullImage").src = src;
  document.getElementById("imageViewer").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageViewer").style.display = "none";
}

function nextImage() {
  const imgs = document.querySelectorAll("#galleryContent img");
  currentIndex = (currentIndex + 1) % imgs.length;
  document.getElementById("fullImage").src = imgs[currentIndex].src;
}

function prevImage() {
  const imgs = document.querySelectorAll("#galleryContent img");
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  document.getElementById("fullImage").src = imgs[currentIndex].src;
}

function toggleTheme() {
  const body = document.body;
  const overlay = document.getElementById("flashOverlay");
  const button = document.getElementById("themeToggle");

  overlay.classList.add("active");

  setTimeout(() => {
    body.classList.toggle("light");
    button.textContent = body.classList.contains("light")? "☀️" : "🌙";
  }, 300);

  setTimeout(() => {
    overlay.classList.remove("active");
  }, 800);
}
