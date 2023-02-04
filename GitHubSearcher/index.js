"use strict";

var url = "https://api.github.com/search/users?q=";
var input = $("input").val();
const queryString =
  "q=" + encodeURIComponent("GitHub Octocat in:readme user:defunkt");
var errorElement = $(".alert");
var cardHolder = $(".cardHolder");

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
            `<div class='card'><img src = '${item.avatar_url}'/>
            <p>${item.login}</p></div> `
          );
          $(".cardHolder").append(card);
        });
      });
    }
  });
}
