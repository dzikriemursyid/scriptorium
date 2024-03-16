//* Method 1
// const closeBtn = document.querySelectorAll(".close");

// for (let i = 0; i < closeBtn.length; i++) {
//   closeBtn[i].addEventListener("click", function () {
//     closeBtn[i].parentElement.style.display = "none";
//   });
// }

//* Method 2
// const closeBtn = document.querySelectorAll(".close");

// closeBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (btnClick) {
//     btnClick.target.parentElement.style.display = "none";
//   });
// });

//* The most effective method
// Notes: By taking advantage of bubbling events, we can add the event handling at the container instead of the close button or card
const container = document.querySelector(".container");

container.addEventListener("click", function (element) {
  if (element.target.className == "close") {
    element.target.parentElement.style.display = "none";
  }
});
