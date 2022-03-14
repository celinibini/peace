document.body.style.margin = 0

let canvas = document.createElement("canvas")
document.body.appendChild(canvas)

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

let context = canvas.getContext("2d")
context.lineWidth = 2
context.lineCap = "round"

let isMouseDown = false
let previous = { x: 0, y: 0 }

canvas.addEventListener("mousemove", event => {
  if (isMouseDown) {
    let { pageX: x, pageY: y } = event
    context.beginPath()
    context.moveTo(previous.x, previous.y)
    context.lineTo(x, y)
    context.stroke()

    previous = { x, y }
  }
})

canvas.addEventListener("mousedown", event => {
  let { pageX: x, pageY: y } = event
  previous = { x, y }

  isMouseDown = true
})

canvas.addEventListener("mouseup", event => {
  isMouseDown = false
})

function myFunction() {
  var x = document.getElementById("fern");
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