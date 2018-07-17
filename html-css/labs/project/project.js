window.onscroll = function() {addStick()};

var header = document.getElementById("mainHeader");

var sticky = header.offsetTop;

function addStick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
