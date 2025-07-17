window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
// Toggle submenu
document.querySelectorAll(".toggle-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    const submenu = this.closest(".nav-item").querySelector(".submenu");
    const isOpen = submenu.style.display === "block";
    submenu.style.display = isOpen ? "none" : "block";
    this.textContent = isOpen ? "+" : "−";
  });
});
