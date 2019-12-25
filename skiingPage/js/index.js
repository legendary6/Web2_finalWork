// 上部轮播
var slider = document.getElementById("slider");
var index = 0;
var isMoving = false;

function next(){
    if(!isMoving){
        isMoving = true;
        index++;
        animate(slider,{left:-1535*index},function(){
            if(index == 5){
                slider.style.left = "0px";
                index = 0;
            }
            isMoving = false;
        });
    }
}

setInterval(next,3000);





