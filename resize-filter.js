window.addEventListener("resize", function () {
  var backdropFilter = document.querySelector(".backdrop-filter");
  backdropFilter.style.width = window.innerWidth + "px";
  backdropFilter.style.height = window.innerHeight + "px";
});
