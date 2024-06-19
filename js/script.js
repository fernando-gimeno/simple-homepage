const toggleTheme = document.querySelector("#toggle-theme");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");

toggleTheme.addEventListener("change", () => {
  if (toggleTheme.checked) {
    toggleTheme.parentElement.children[1].classList.remove("selected");
    toggleTheme.parentElement.children[0].classList.add("selected");
    toggleTheme.parentElement.children[0].setAttribute(
      "src",
      "./images/Moon_fill.svg"
    );
    toggleTheme.parentElement.children[1].setAttribute(
      "src",
      "./images/Sun_fill_light.svg"
    );
    logo.setAttribute("src", "./images/alarado-icon-homepage-dark.svg");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    toggleTheme.parentElement.children[0].classList.remove("selected");
    toggleTheme.parentElement.children[1].classList.add("selected");
    toggleTheme.parentElement.children[0].setAttribute(
      "src",
      "./images/Moon_fill_light.svg"
    );
    toggleTheme.parentElement.children[1].setAttribute(
      "src",
      "./images/Sun_fill.svg"
    );
    logo.setAttribute("src", "./images/alarado-icon-homepage.svg");
    document.documentElement.setAttribute("data-theme", "light");
  }
});

menu.addEventListener("click", () => {
  nav.classList.toggle("show")
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("show")
});
