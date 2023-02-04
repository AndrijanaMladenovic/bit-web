//function move(event) {
// var x = event.clientX - 70;
// var y = event.clientY - 70;

// var fudbaler = document.getElementById("fudbaler");
/// fudbaler.style.top = y + "px";
// fudbaler.style.left = x + "px";
// }

var teren = document.querySelector(".teren");
var btn = document.querySelector(".btn");
var fudbaler = document.getElementById("fudbaler");
var teren = document.querySelector(".teren");

// move("click");

function move() {
  var x = event.clientX - 70;
  var y = event.clientY - 70;

  fudbaler.style.top = y + "px";
  fudbaler.style.left = x + "px";
}
teren.addEventListener("click", move);

function remove() {
  teren.removeEventListener("click", move);
  btn.textContent = "No more moving";
}

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
