/*
 	竖直轮播图
*/
var box = document.getElementById("box");
var slider = document.getElementById("slider");
var slidList = document.getElementsByClassName("slide");
var image = document.getElementById("image");
var isMoving = false;  //是否正在动
var index = 2; 		   //初始显示第三张图片
var imgList = ["images/i_one_img1.jpg", "images/i_one_img2.jpg", "images/i_one_img3.jpg", "images/i_one_img4.jpg", "images/i_one_img5.jpg"]
var up = document.getElementById("up");
var down = document.getElementById("down");
var goRight = document.getElementsByClassName("goRight");
var right = document.getElementById("right");
var boxHiddenList = document.getElementsByClassName("box_hidden");


//播放下一张函数
function next(){
	var flag = false;
	if(isMoving){
		return;
	}
	index ++;
	if(index == 6) {
		index--;
		return;
	}
	imgChange(flag);
	isMoving = true;
	animate(slider, {top : -165 * index}, function(){
		if(index == 5){
			slider.style.top = "0";
			index = 0;
			slidList[index].id = "active";
		}
		isMoving = false;
	});
}


function pre(){
	if(isMoving){
		return;
	}
	index --;
	if(index == -1){
		index = 0;
		return;
	}
	imgChange();
	isMoving = true;
	console.log(index);
	animate(slider, {top : -165 * index}, function(){
		if(index == 0){
			slider.style.top = "-825px";
			index = 5;
			slidList[index].id = "active";
		}
		isMoving = false;
	});
}


//自动轮播
var timer = setInterval(next, 3000);


//图片以及文字的变化
function imgChange(){
	for(var i = 0; i < slidList.length; ++i){
		slidList[i].id = "";
	}
	slidList[index].id = "active";
	//图片变化
	if(index == 0){
		image.src = imgList[3];
	}else if(index == 1){
		image.src = imgList[4];
	}else{
		image.src = imgList[index-2];
	}
	//右侧文字介绍的变化
	for(var i = 0; i < boxHiddenList.length; ++i){
		boxHiddenList[i].style.display = "";
		boxHiddenList[i].style.top = "370px";
	}
	if(index == 0){
		boxHiddenList[3].style.display = "block";
		animate(boxHiddenList[3], {top : 210});
	}else if(index == 1){
		boxHiddenList[4].style.display = "block";
		animate(boxHiddenList[4], {top : 210});
	}else{
		boxHiddenList[index-2].style.display = "block";
		animate(boxHiddenList[index-2], {top : 210});
	}
}


//点击每个滑块
for(var i = 0; i < slidList.length; ++i){
	//根据自定义names属性完成点击事件
	slidList[i].onclick = function(){
		console.log(this.getAttribute("name"));
		clearInterval(timer);
		for(var i = 0; i < slidList.length; ++i){
			slidList[i].id = "";
		}
		this.id = "active";
		image.src = imgList[this.getAttribute("name") - 1];

		for(var i = 0; i < boxHiddenList.length; ++i){
			boxHiddenList[i].style.display = "";
			boxHiddenList[i].style.top = "370px";
		}
		boxHiddenList[this.getAttribute("name") - 1].style.display = "block";
		animate(boxHiddenList[this.getAttribute("name") - 1], {top : 210});
	}
}

//鼠标划上盒子取消轮播
image.onmouseover = function(){
	clearInterval(timer);	
}

//鼠标离开盒子继续轮播
image.onmouseout = function(){	
	timer = setInterval(next, 3000);
}


//切换上一张
up.onclick = pre;
//切换下一张
down.onclick = next;



// //分网页链接动画前进
// var flag = false;  //动画一定保证结束
// goRight.onmouseover = function(){
// 	var timer1 = setInterval(function(){
// 		var now = parseInt(getStyle(right, "left"));
// 		console.log(now);
// 		if(now == 80){
// 			clearInterval(timer1);
// 			flag = true;
// 		}else{
// 			right.style.left = now + 1 + "px";
// 		}
// 	},8);
// }


// goRight.onmouseout = function(){
// 	if(flag){
// 			var timer1 = setInterval(function(){
// 			var now = parseInt(getStyle(right, "left"));
// 			if(now == 55){
// 				clearInterval(timer1);
// 			}else{
// 				right.style.left = now - 1 + "px";
// 			}
// 		},8);
// 	}
// }

