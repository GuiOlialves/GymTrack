const html = document.querySelector("html");
const splash = document.querySelector(".splash");

html.classList.remove("desktop");
html.classList.add("mobile");
setTimeout(() => {
  splash.style.opacity = 0;
}, 700);
splash.addEventListener("transitionend", () => {
  splash.style.display = "none";
});
