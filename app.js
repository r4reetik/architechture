document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    document.getElementById("navBack").classList.add("bg-gray-900");
  } else {
    document.getElementById("navBack").classList.remove("bg-gray-900");
  }
});

function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}
