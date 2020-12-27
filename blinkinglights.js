var c = document.getElementsByClassName("canvas");
var y = 0;
var x = 0;
var i=0;
for (var i = 0; i < c.length; i++) {
  var ctx = c[i].getContext("2d");
  ctx.beginPath();
  ctx.arc(40, 40, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "#F25278";
  ctx.fill();
}
function score(f) {
  i=i*f+f;
  return i;
}
function countDown(i, callback) {
  //callback = callback || function(){};
  timer = setInterval(function() {
    document.getElementById("timer").innerHTML = "Time Left: " + i;
    i-- || (clearInterval(timer), callback());
  }, 1000);
}
function Colour() {
  y=x;
  var ctx = c[y].getContext("2d");
  ctx.fillStyle = "#F25278";
  ctx.fill();
  x = Math.floor(Math.random()*9);
  var ctx = c[x].getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fill();
  c[x].onclick = score(1);
}
function Game() {
  myVar = setInterval(Colour, 800);
  setTimeout(Reset,60000);
  countDown(60, function(){alert("Time Up!");});
}
function Reset() {
  abort = true;
  clearInterval(myVar);
  for (var i = 0; i < c.length; i++) {
    var ctx = c[i].getContext("2d");
    ctx.beginPath();
    ctx.arc(40, 40, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#F25278";
    ctx.fill();
    score(0);
  }
}
