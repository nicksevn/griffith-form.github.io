function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if(i.className === "nav__menu") {
      i.className += " responsive";
  } else {
      i.className = "nav__menu";
  }
 }