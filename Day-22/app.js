//Cach1
// var btnList = document.querySelectorAll("button");
// var imgList = document.querySelectorAll("img");

// btnList.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let type = e.currentTarget.getAttribute("type");
//     imgList.forEach((img) => {
//       let foodType = img.getAttribute("type");

//       if (type == "all" || foodType == type) {
//         img.classList.remove("hide");
//       } else {
//         img.classList.add("hide");
//       }
//     });
//   });
// });

var imgList = document.querySelectorAll("img");
var container = document.querySelector(".food-container");
var btnList = document.querySelectorAll("button");

var arr = [];
imgList.forEach((item) => {
  arr.push({
    src: item.src,
    type: item.getAttribute("type"),
  });
});

function activeButton(btnActive) {
  btnList.forEach((btn) => {
    btn.classList.remove("active");
  });
  btnActive.classList.add("active");
}

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //active button
    activeButton(e.currentTarget);
    //filter data
    let type = e.currentTarget.getAttribute("type");
    if (type == "all") {
      render(arr);
      return;
    }
    let filterData = arr.filter((food) => {
      return food.type == type;
    });
    render(filterData);
  });
});

function render(list) {
  container.innerHTML = "";
  list.forEach((item) => {
    let imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.setAttribute("type", item.type);
    let divElement = document.createElement("div");
    divElement.classList.add("food");
    divElement.append(imgElement);
    container.append(divElement);
  });
}
