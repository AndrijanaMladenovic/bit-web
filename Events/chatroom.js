function sendMessage() {
  var message = document.querySelector(".message");
  var container = document.querySelector(".container");
  container.innerHTML += `<p>${message.value}</p>`;
}
