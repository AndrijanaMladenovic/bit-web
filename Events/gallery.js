"use strict";

function border() {
  var gallery = document.querySelector(".gallery");
  var image = gallery.children;
  var img;
  for (var i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function () {
      if (this.width >= 300) {
        this.style.border = "1px solid red";
        console.log(this.src);
      } else {
        this.style.border = "none";
        img = image[i];
        console.log(this.src);
      }
    });
  }
}
