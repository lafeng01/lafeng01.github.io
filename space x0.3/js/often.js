window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  console.log(scrollY);
  var iw = document.querySelector(".img-worker");
  if (scrollY > 600) {
    iw.style.display = "block";
    iw.style.position = "fixed";
    iw.style.right = 0;
    iw.style.top = "500px";
    iw.style.transition = "transform 1s linear";
    iw.style.transform = "translateY(-100px)";
  } else if (scrollY > 500) {
    iw.style.display = "block";
  } else {
    iw.style.display = "none";
    iw.style.position = "relative";
    iw.style.transition = "transform 1s linear";
    iw.style.top = "-20px";
    iw.style.transform = "translateY(0px)";
  }
});
document.getElementById("icon-header").onclick = function () {
  document.getElementById("bg-menu").style.display = "block";
  document.getElementById(icon - header).style.display = "none";
};
document.getElementById("bg-menu").onclick = function () {
  document.getElementById("bg-menu").style.display = "none";
};

document.getElementById("flexRow").onmouseover = function (event) {
  //   var div = document.getElementById("flexRow");

  console.log("在标签内部");
  var div = event.target;
  var x = event.clientX;
  var y = event.clientY;
  var divx1 = div.offsetLeft;
  var divy1 = div.offsetTop;
  var divx2 = div.offsetLeft + div.offsetWidth;
  var divy2 = div.offsetTop + div.offsetHeight;
  if (!(x < divx1 || x > divx2 || y < divy1 || y > divy2)) {
    console.log("在标签内部");
  } else {
    console.log("在标签外部");
  }
};
// 图片旋转
// window.onload = function () {
//   const img = document.getElementById("rotating-image");

//   let rotation = 0;
//   function rotateImage() {
//     rotation += 1;
//     img.style.transform = `rotate(${rotation}deg)`;
//     requestAnimationFrame(rotateImage);
//   }

//   rotateImage();
// };

// 变图片
// let currentImageIndex = 1; // 当前显示的图片索引

// function changeImage(direction) {
//   const images = ["/img/banner01.jpg", "/img/火箭 (1).png"]; // 图片路径数组

//   if (direction === "left") {
//     currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//   } else if (direction === "right") {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//   }

//   const slideshowImage = document.querySelector("home-header-img");
//   slideshowImage.src = images[currentImageIndex];
// }
function changeImage() {
  element = document.getElementById("icon-right");
  if (element.src.match("bulbon")) {
    element.src = "/img/banner01.jpg";
  } else {
    element.src = "/img/火箭.jpg";
  }
}
