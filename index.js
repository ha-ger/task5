let allImages = document.querySelectorAll(".All");
let menu= document.querySelectorAll(".menu p");

menu.forEach((ele) => {
  ele.addEventListener("click", showImages);
  ele.addEventListener("click", menuActive);
});

function menuActive(e) {
  menu.forEach((ele) => ele.classList.remove("active"));
  e.target.classList.add("active");
}

function showImages(e) {
  allImages.forEach((imgs) => (imgs.style.display = "none"));
  document.querySelectorAll(e.target.dataset.menu).forEach((imag) => {
    imag.style.display = "block";
  });
}
