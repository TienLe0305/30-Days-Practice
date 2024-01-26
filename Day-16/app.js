var h1 = document.querySelector("#home h1");
var animationElements = document.querySelectorAll(".show-on-scroll");

function toggleAnimationElementInWindow(element) {
  var rect = element.getClientRects()[0];
  var heightScreen = window.innerHeight;

  //Check xem element co ben trong man hinh hay khon
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    element.classList.add("start");
  } else {
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((el) => {
    toggleAnimationElementInWindow(el);
  });
}

window.onscroll = checkAnimation;
