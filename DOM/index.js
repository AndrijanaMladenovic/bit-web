"use strict";

var druga = document.querySelector(".druga");

function changeBackground(color) {
  druga.style.backgroundColor = color;
}

changeBackground("black");

var all = document.querySelectorAll("li");

function triggered() {
  for (var i = 0; i < all.length; i++) {
    all[i].classList.add("list");
    all[i].style.backgroundColor = "pink";
  }
}
triggered();

var x = document.querySelector(".treca").querySelectorAll("li");

function changeName() {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.add("bg-color");
    x[i].style.backgroundColor = "red";
    x[i].style.textTransform = "uppercase";
  }
}

changeName();

///*** Traversing ***///

function select() {
  var element = document.querySelector(".active");
  element.style.backgroundColor = "aqua";
  element.classList.remove("active");
  var mydiv = document.getElementById("mydiv");
  var element2 = mydiv.firstElementChild;
  element2.classList.remove("list");
  element2.classList.add("active");
}
select();

function updateTextNode() {
  var element = document.querySelector(".menu");

  alert(element.textContent);
}
updateTextNode();

function last() {
  var element = (document.querySelector(".last").textContent = "andrijana");
}
last();

///* INNERHTML */
