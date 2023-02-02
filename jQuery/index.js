$(document).ready(function () {
  console.log("hello world");
});

$("li:first").css("border-bottom", "1px solid red");
$("li").css("text-transform", "uppercase");
$(".active").css("color", "blue");

var ln = $("li").length;

ln = Math.floor(ln / 2);
console.log(ln);
$("li:eq(" + ln + ")").css("background-color", "red");
