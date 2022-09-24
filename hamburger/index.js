const ul = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger");
console.log(hamburger);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});

document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    ul.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
