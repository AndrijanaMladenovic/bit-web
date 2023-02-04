"use strict";

var url = "https://api.github.com/search/users?q=";
var input = $("input").val();

var errorElement = $(".alert");
var cardHolder = $(".cardHolder");
$("input").keyup(function (e) {
  var keyName = e.key;

  if (keyName === "Enter") {
  }
});
$(document).ready(function () {
  search();
});

function search(input) {
  $("input").keyup(function (e) {
    var keyName = e.key;

    if (keyName === "Enter") {
      input = $("input").val();

      $.ajax({
        method: "GET",
        url: `${url}${input}`,
      }).done(function (response) {
        cardHolder.html("");
        if (!response) {
          errorElement.text("No results");
          errorElement.toggle();
        }
        response.items.forEach(function (item) {
          var card = $(
            `<div class='card'><img src = '${item.avatar_url}'/></div> `
          );
          $(".cardHolder").append(card);
          console.log(card);
        });
      });
    }
  });
}
