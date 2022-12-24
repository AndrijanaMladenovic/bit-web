"use strict";

function text() {
  var text = "Andrijana Mladenovic";
  console.log(text);
}

text();

function navigator() {
  console.log(navigator);
  console.log(navigator.userAgentData);
  console.log(navigator.userAgent);
}

navigator();

function isOnline() {
  if (navigator.onLine) {
    console.log("Online");
  } else {
    console.log("offline");
  }
}

console.log(isOnline());

function screen() {
  var width = screen.width;
  var height = screen.height;
  var possible = screen.availHeight;
  console.log(width, height, possible);
}

screen();

function screenInfo() {
  var width = window.screen.width;
  var height = window.screen.height;
  var maxHeight = window.screen.availHeight;
  console.log(width);
  console.log(height);
  console.log(maxHeight);
}
screenInfo();

function b() {
  console.log(location.href);
  console.log(location.hostname);
  console.log(location.protocol);
  console.log(location.search);
}
b();

function stores() {
  localStorage.setItem("name", "Andrijana");
}
stores();

function remove() {
  localStorage.clear();
}
remove();

function read() {
  var name = localStorage.getItem("name");

  if (!name) {
    console.log("There is no data");
  } else {
    console.log(name);
  }
}

read();

// function stores() {
//  sessionStorage.setItem("name", "Andrijana");
// }
// stores();

// function remove() {
//   sessionStorage.clear();
// }
// remove();

// function read() {
//  var name = sessionStorage.getItem("name");

//  if (!name) {
// console.log("There is no data");
//  } else {
// console.log(name);
//  }
// }

// read();

function message() {
  window.alert("Greeting Message");
  var promp = window.prompt("???");
  if (promp !== null) {
    var b = window.confirm("We will submit this answer now!" + promp);
    if (b) {
      alert("Success");
    }
  }
}
// message();

function random() {
  var b = [];
  for (var i = 0; i < 10; i++) {
    b.push(Math.floor(Math.random() * 50 + 1));
  }
  console.log(b);
  return b;
}

function round() {
  var array = random();
  var a = [];
  for (var i = 0; i < array.length; i++) {
    a.push(array[i].toFixed(2));
  }
  console.log(a);
  return a;
}
round();

function floor() {
  var array = random();
  var y = [];
  for (var i = 0; i < array.length; i++) {
    y.push(Math.floor(array[i]));
  }
  console.log(y);
}

floor();

function max() {
  var array = random();
  console.log(Math.max(...array));
}
max();

function date() {
  var now = new Date();
  console.log(new Date());
  console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
  console.log(
    now.getDate() + "," + (now.getMonth() + 1) + "," + now.getFullYear()
  );
}
date();
