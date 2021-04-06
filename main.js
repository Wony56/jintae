const bg = document.querySelector(".content");

document.querySelector(".change-button").addEventListener("click", (event) => {
  if (document.body.style.background === "transparent") {
    document.body.style.background = "black";
  } else {
    document.body.style.background = "transparent";
  }
});
