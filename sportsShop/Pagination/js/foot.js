var big = document.getElementById("big");
var smallList = document.getElementsByClassName("small");


smallList[0].onmouseover = function(){
	console.log("df");
	big.src = "img/qqewm.jpg";
}
smallList[1].onmouseover = function(){
	big.src = "img/wxewm.jpg";
}
smallList[2].onmouseover = function(){
	big.src = "img/wbewm.jpg";
}
