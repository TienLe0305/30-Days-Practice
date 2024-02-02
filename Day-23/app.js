var imgList = document.querySelectorAll(".zoomer img");
var mirror = document.querySelector("#mirror");
let scope = 4;
imgList.forEach(function (img) {
  img.addEventListener("mousemove", function (e) {
    mirror.classList.remove("hide");
    var percentMouseByW = (e.offsetX / this.offsetWidth) * 100;
    var percentMouseByY = (e.offsetY / this.offsetHeight) * 100;
    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;
    mirror.style.backgroundSize = `1000px 1000px`;
    mirror.style.backgroundPosition = `${percentMouseByW}% ${percentMouseByY}%`;
    var source = this.getAttribute("src");
    mirror.style.backgroundImage = `url(${source})`;
  });

  img.addEventListener("mouseleave", function (e) {
    mirror.classList.add("hide");
  });
});
