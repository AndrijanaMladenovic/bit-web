var speedOne = 400;
var pozadinaMove = 0;
addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      var player = document.querySelector(".marioRun");
      console.log("left");
      document.querySelector(".mario").style.display = "none";
      document.querySelector(".marioRun").style.visibility = "visible";
      var pozadina = document.querySelector(".bg-img");
      player.style.left = speedOne + "px";
      pozadina.style.left = pozadinaMove + "px";
      speedOne -= 19;
      pozadinaMove += 20;
      break;

    case 39:
      console.log("right");
      var player = document.querySelector(".marioRun");

      document.querySelector(".mario").style.display = "none";
      document.querySelector(".marioRun").style.visibility = "visible";
      var pozadina = document.querySelector(".bg-img");
      player.style.left = speedOne + "px";
      pozadina.style.right = pozadinaMove + "px";
      speedOne += 20;
      pozadinaMove += 10;
      break;
  }
});
