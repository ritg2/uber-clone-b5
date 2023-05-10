const scrollBtn = document.querySelector(".scroll-btn");

window.onscroll = function () {
  scrollFunction();
};

let position = 300;

function scrollFunction() {
  if (
    document.body.scrollTop > position ||
    document.documentElement.scrollTop > position
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
