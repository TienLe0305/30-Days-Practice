var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");
var error = document.querySelector(".error");

upload.addEventListener("change", function (e) {
  var file = upload.files[0];

  if (!file.name.endsWith("jpg")) {
    error.innerHTML = `Hinh anh hai duoc dinh dang jpg`;
    return;
  } else {
    error.innerHTML = ``;
  }

  if (!file.size / (1024 * 1024) > 5) {
    error.innerHTML = `Chi duoc upload anh < 5MB`;
    return;
  } else {
    error.innerHTML = ``;
  }

  var img = document.createElement("img");
  img.src = URL.createObjectURL(upload.files[0]);
  preview.appendChild(img);
});
