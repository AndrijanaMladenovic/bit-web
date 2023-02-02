$(document).ready(function () {
  console.log("hello world");
  add();

  $("img").each(function (index, element) {
    var resulution = (Math.random() * 550).toFixed(0) + "px";

    $(element).css("width", resulution);

    if (index === 0) {
      if ($(element).css("width") > "200px") {
        $(element).css("border", "none");
      }
    } else if ($(element).css("width") < "200px") {
      $(element).css("border", "5px solid green");
    }
  });
});

function add() {
  $("body").html("<div></div>");
  $("div").prepend(
    '<img  src="./img/azzedine-rouichi-OByL6ot4KWs-unsplash.jpg"/>'
  );
  $("div").prepend('<img src="./img/2.jpg"/>');
  $("div").prepend('<img src="./img/3.jpg"/>');
  $("div").prepend('<img src="./img/4.jpg"/>');
  $("div").prepend('<img src="./img/5.jpg"/>');
  $("div").prepend('<img src="./img/6.jpg"/>');
  $("div").before("<h1>NASLOV</h1>");
}
