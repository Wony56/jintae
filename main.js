const bg = document.querySelector(".content");

document.querySelector(".change-button").addEventListener("click", (event) => {
  if (bg.style.background === "transparent") {
    bg.style.background = "black";
  } else {
    bg.style.background = "transparent";
  }
});
