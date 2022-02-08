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
