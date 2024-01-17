var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnError = document.querySelector(".control .error");

btnSuccess.addEventListener("click", function () {
  createdToast("success");
});

btnWarning.addEventListener("click", function () {
  createdToast("warning");
});

btnError.addEventListener("click", function () {
  createdToast("error");
});

function createdToast(status) {
  let templateInner = `
    <i class="fa-solid fa-circle-check"></i>
    <div class="message">This is a Success message</div>
    `;

  switch (status) {
    case "warning":
      templateInner = `
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div class="message">This is a Warning message</div>
            `;
      break;
    case "success":
      templateInner = `
            <i class="fa-solid fa-circle-check"></i>
            <div class="message">This is a Success message</div>
            `;
      break;
    case "error":
      templateInner = `
            <i class="fa-solid fa-circle-exclamation"></i>
            <div class="message">This is a Error message</div>
            `;
      break;
  }

  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);

  toast.innerHTML = `
       ${templateInner}
        <p class="countdown"></p>
  `;

  var toastsList = document.querySelector("#toasts");
  toastsList.appendChild(toast);

  setTimeout(function () {
    toast.style.animation = "slide-hide 1s ease forwards";
  }, 3000);

  setTimeout(function () {
    toast.remove();
  }, 6000);
}
