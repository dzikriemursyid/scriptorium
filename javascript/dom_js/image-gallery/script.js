const container = document.querySelector(".container");
const highlightImg = document.querySelector(".highlightImg img");

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("thumb")) {
    highlightImg.src = event.target.src;
  }
});
