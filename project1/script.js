var i=0;
// var colors = ['#008CBA','#f44336','#091921','#4CAF50','#ffa500','#6a5acd','#ee82ee','#787878','#ff5d12','#730212','#ff0000','#730263','#73fc63']
function boomshow(){
	document.getElementById("boomtext").style.visibility = "visible";
}
function boomhide(){
	document.getElementById("boomtext").style.visibility = "hidden";
}
function myfunc(){
	let col = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
	document.body.style.background = col;
	document.getElementById("bgcolor").innerHTML = "Background-Color : " + col;
	boomshow();
	setTimeout(boomhide, 1500);
}