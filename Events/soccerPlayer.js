//function move(event) {
// var x = event.clientX - 70;
// var y = event.clientY - 70;

// var fudbaler = document.getElementById("fudbaler");
/// fudbaler.style.top = y + "px";
// fudbaler.style.left = x + "px";
// }

var teren = document.querySelector(".teren");
var btn = document.querySelector("#stop");
var fudbaler = document.getElementById("fudbaler");

// move("click");
teren.addEventListener("click", function (e) {
  var x = e.clientX - 70;
  var y = e.clientY - 70;

  fudbaler.style.top = y + "px";
  fudbaler.style.left = x + "px";
  console.log(e.stopPropagation());
  e.stopPropagation();
});

var teren = document.querySelector(".teren");
var btn = document.querySelector("#stop");

btn.addEventListener("click", function () {});
//
//  if (isTurnOn) {
//  field.removeEventListener("click", movePlayer);
//  controlMovingButton.textContent = "Start moving";
//  isTurnOn = false;
// } else {
//  field.addEventListener("click", movePlayer);
//  controlMovingButton.textContent = "Stop moving";
//  isTurnOn = true;
//  }
