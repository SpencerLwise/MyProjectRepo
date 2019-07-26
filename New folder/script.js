
const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');

  alert('Hello ' + name + ', nice to see you!');
 


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
