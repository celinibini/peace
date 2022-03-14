function myFunction() {
    var x = document.getElementById("fern");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction() {
    var x = document.getElementById("markerrot");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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