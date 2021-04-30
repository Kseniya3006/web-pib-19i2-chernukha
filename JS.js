
window.onload = function(){
window.setInterval(
function(){
let t = new Date();
document.getElementById("clock").innerHTML = t.toLocaleTimeString();}, 1000);}

function slidecontainer(){
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value; 
	slider.oninput = function() {
    output.innerHTML = this.value;}
	}

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
