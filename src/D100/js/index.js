let colors = ["#1B9CFC", "#25CCF7", "#9AECDB"];

let randomColor = setInterval(changeColor, 1000);

function myTimer() {
   let randomItem = colors[Math.floor(Math.random()*colors.length)];
	
let el = document.querySelector('.frame');
		document.el.style.setProperty('background', randomItem);
}