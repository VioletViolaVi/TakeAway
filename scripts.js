document.addEventListener("DOMContentLoaded", function () {
  // https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
  $("#slideshow > div:gt(0)").hide();

  setInterval(function () {
    $("#slideshow > img:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 3000);
});
