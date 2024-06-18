const toggleTheme = document.querySelector("#toggle-theme");
const logo = document.querySelector(".logo");

toggleTheme.addEventListener("change", () => {
  if (toggleTheme.checked) {
    toggleTheme.parentElement.children[1].classList.remove("selected")
    toggleTheme.parentElement.children[0].classList.add("selected")
    toggleTheme.parentElement.children[0].setAttribute("src", "./images/Moon_fill.svg")
    logo.setAttribute("src", "./images/alarado-icon-homepage-dark.svg")
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    toggleTheme.parentElement.children[0].classList.remove("selected")
    toggleTheme.parentElement.children[1].classList.add("selected")
    toggleTheme.parentElement.children[0].setAttribute("src", "./images/Moon_fill.svg")
    logo.setAttribute("src", "./images/alarado-icon-homepage.svg")
    document.documentElement.setAttribute("data-theme", "light");
  }
});