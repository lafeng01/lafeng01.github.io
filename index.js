
window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  console.log(scrollY);
  var iw = document.querySelector(".img-worker");
  if (scrollY > 600) {
    iw.style.position = "fixed";
    iw.style.right = 0;
    iw.style.top = "500px";
    iw.style.transition = "transform 1s linear";
    iw.style.transform = "translateY(-50px)";
  } else {
    iw.style.position = "relative";
    iw.style.transition = "transform 1s linear";
    iw.style.top = "-200px";
    iw.style.transform = "translateY(0px)";
  }
});
