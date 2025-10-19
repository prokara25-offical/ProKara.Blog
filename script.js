// Yukarı çık butonu
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Başlık animasyonu (isteğe bağlı)
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("header h1");
  title.style.transition = "all 1s ease";
  title.style.transform = "scale(1.1)";
  setTimeout(() => title.style.transform = "scale(1)", 1000);
});
