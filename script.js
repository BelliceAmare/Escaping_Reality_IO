let zombie;
let theta = 0, dtheta = 15;
let x = 0, dx = 0.5;
window.onload = function() {
  zombie = document.querySelector("#zombie4");

  zombie.onmouseenter = function() {
    zombie.setAttribute("#animation-mixer",{timescale:2});
  }
  loop();
}
function loop() {
    x += dx;
    zombie.setAttribute("position", `${x} 0 0`);  
  setTimeout(loop, 10);
}
