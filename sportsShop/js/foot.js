var big = document.getElementById("big");
var smallList = document.getElementsByClassName("small");


smallList[0].onmouseover = function(){
	console.log("df");
	big.src = "images/qqewm.jpg";
}
smallList[1].onmouseover = function(){
	big.src = "images/wxewm.jpg";
}
smallList[2].onmouseover = function(){
	big.src = "images/wbewm.jpg";
}
