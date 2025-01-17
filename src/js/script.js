const html = document.querySelector("html");
const splash = document.querySelector(".splash");

setTimeout(() => {
  splash.style.opacity = 0;
}, 700);
splash.addEventListener("transitionend", () => {
  splash.style.display = "none";
});
