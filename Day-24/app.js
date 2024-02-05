var container = document.querySelector(".container");

function randomColor() {
  var charColor = "0123456789ABCDEF";
  var color = "#";

  for (let i = 0; i < 6; i++) {
    color += charColor[Math.floor(Math.random() * charColor.length)];
  }
  return color;
}

for (let i = 0; i < 200; i++) {
  var square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  square.addEventListener("mouseenter", function (e) {
    let color = randomColor();
    let el = e.currentTarget;
    el.style.background = color;
    el.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
  });
  square.addEventListener("mouseleave", function (e) {
    let el = e.currentTarget;
    el.style.background = "#1d1d1d";
    el.style.boxShadow = "0 0 2px #000";
  });
}
