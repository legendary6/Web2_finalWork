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

    //简介右侧文字
    var right = document.getElementById("right");
    var vi = document.getElementById("vi");
    var box1 = document.getElementById("box1");
    var left = document.getElementById("left");
    box1.onmouseover = function(){
        // 浮现右侧文字
        var timer = setInterval(function(){
            var now = parseInt(getStyle(right,"right"));
            var speed = Math.ceil((-now-900)/6);
            if(now == -900){
                clearInterval(timer)
            }else{
                right.style.right = now + speed + "px";
            }
        },20)
        // 浮现左侧文字
        
        var timer1 = setInterval(function(){
            left.style.display = "block";
            var now = parseInt(getStyle(left,"left"));
            var speed = (800 - now)/6;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);//只有在当speed为零时才会停止周期执行
            if(now == 900){
                clearInterval(timer1);
            }else{
                left.style.left = now + speed + "px";
            }
        },30)
    }
    vi.onclick = function(){
        // 文字消失
        right.style.display = "none";
        right1.style.display = "block";
        // left.style.display = "none";
        // 出现其他文字
        var timer2 = setInterval(function(){
            var now = parseInt(getStyle(right1,"right"));
            var speed = Math.ceil((-now-900)/6);
            if(now == -900){
                clearInterval(timer2)
            }else{
                right1.style.right = now + speed + "px";
            }
        },35)
    }



    // 新闻，相关赛事
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    var yd1 = document.getElementById("yd1");
    var yd2 = document.getElementById("yd2");
    var yd3 = document.getElementById("yd3");
    link1.onmousemove = function(){
        link1.style.textDecoration = "underline";
    }
    link1.onmouseout = function(){
        link1.style.textDecoration = "none";
    }
    link2.onmousemove = function(){
        link2.style.textDecoration = "underline";
    }
    link2.onmouseout = function(){
        link2.style.textDecoration = "none";
    }
    link3.onmousemove = function(){
        link3.style.textDecoration = "underline";
    }
    link3.onmouseout = function(){
        link3.style.textDecoration = "none";
    }
    yd1.onmousemove = function(){
        yd1.style.textDecoration = "underline";
    }
    yd1.onmouseout = function(){
        yd1.style.textDecoration = "none";
    }
    yd2.onmousemove = function(){
        yd2.style.textDecoration = "underline";
    }
    yd2.onmouseout = function(){
        yd2.style.textDecoration = "none";
    }
    yd3.onmousemove = function(){
        yd3.style.textDecoration = "underline";
    }
    yd3.onmouseout = function(){
        yd3.style.textDecoration = "none";
    }









    // 视频部分----------------------
    //更多精彩视频按钮的效果
    var moreVideo = document.getElementById("more-video");
    var moreVideoFont = moreVideo.children[0].children[0];
    moreVideo.onmousemove = function () {
        moreVideo.style.borderColor = "rgb(36, 139, 212)";
        moreVideoFont.style.color = "rgb(36, 139, 212)";
    }
    moreVideo.onmouseout = function () {
        moreVideo.style.borderColor = "#d3d3d3";
        moreVideoFont.style.color = "#d3d3d3";
    }

    //鼠标移动到图片上面，图片放大,加个阴影边框,字体变色
    var video_img_list = document.getElementsByClassName("video-box")[0].getElementsByTagName("img");
    var video_span_list = document.getElementsByClassName("video-box")[0].getElementsByTagName("span");
    for(i = 0;i<video_img_list.length;i++){
        video_img_list[i].onmouseover = function () {
            this.style.transform = "scale(1.1)";
            
            //box-shadow是css3的一个属性，用于设置边框阴影
            this.parentNode.style.boxShadow = "5px 5px 5px grey";
            this.parentNode.nextElementSibling.style.color = "#e9a42c";
        }
        video_img_list[i].onmouseout = function () {
            this.style.transform = "scale(1.0)";
            this.parentNode.style.boxShadow = "";
            this.parentNode.nextElementSibling.style.color = "#222";
        }
    }
    for(i = 0;i<video_span_list.length; i++){
        video_span_list[i].onmouseover = function () {
            this.style.color = "#e9a42c";
        }
        video_span_list[i].onmouseout = function () {
            this.style.color = "#222";
        }
    }





    // 爱好者专区
    var gg = document.getElementsByClassName("gg")[0];
    var list1 = document.getElementsByClassName("xian");
    var id1 = document.getElementById("id1");
    var id2 = document.getElementById("id2");
    var id3 = document.getElementById("id3");
    var id4 = document.getElementById("id4");
    var id5 = document.getElementById("id5");
    var list = gg.children;
    id1.style.display = "block";
    list[0].onmouseover = function(){
        for(var i = 0; i <list.length; ++i){
            if(i == 0){
                list[0].className = "liselect";
                id1.style.display = "block";
            }else{
                list[i].className = "";
                id2.style.display = "none";
                id3.style.display = "none";
                id4.style.display = "none";
                id5.style.display = "none";
            }
        }
    }
    list[1].onmouseover = function(){
        for(var i = 0; i <list.length; ++i){
            if(i == 1){
                list[1].className = "liselect";
                id2.style.display = "block";
            }else{
                list[i].className = "";
                id1.style.display = "none";
                id3.style.display = "none";
                id4.style.display = "none";
                id5.style.display = "none";
            }
        }
    }
    list[2].onmouseover = function(){
        for(var i = 0; i <list.length; ++i){
            if(i == 2){
                list[2].className = "liselect";
                id3.style.display = "block";
            }else{
                list[i].className = "";
                id1.style.display = "none";
                id2.style.display = "none";
                id4.style.display = "none";
                id5.style.display = "none";
            }
        }
    }
    list[3].onmouseover = function(){
        for(var i = 0; i <list.length; ++i){
            if(i == 3){
                list[3].className = "liselect";
                id4.style.display = "block";
            }else{
                list[i].className = "";
                id1.style.display = "none";
                id3.style.display = "none";
                id2.style.display = "none";
                id5.style.display = "none";
            }
        }
    }
    list[4].onmouseover = function(){
        for(var i = 0; i <list.length; ++i){
            if(i == 4){
                list[4].className = "liselect";
                id5.style.display = "block";
            }else{
                list[i].className = "";
                id1.style.display = "none";
                id3.style.display = "none";
                id4.style.display = "none";
                id2.style.display = "none";
            }
        }
    }
