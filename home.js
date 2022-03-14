var name = prompt ("Wie lautet mein Name?")
var h3Node = document.getElementById("customInput")
h3Node.innerText = name.toUpperCase()
console.log(name);


var i = 0;
var txt = 'Ich bin deins, ein Objekt';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var balls= document.getElementsByClassName("ball");
document.onmousemove = function (){
var x = event.clientX * 100 / window.innerWidth + "%";
var y = event.clientY * 100 / window.innerHeight + "%";
for(var i=0;i<2;i++){
  balls[i].style.left =x;
  balls[i].style.top =y;
  balls[i].style.transform ="translate(-"+x+",-"+y+")";
}
}

function myFunction() {
  var x = document.getElementById("trau");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
  var x = document.getElementByClass("taste");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
