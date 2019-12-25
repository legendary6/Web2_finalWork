var box = document.getElementById("box");
var Navlist = document.getElementById("nav-lbt").children;
var slider = document.getElementById("slider");
var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 1;
// var timer;
var isMoving = false;

function next() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index++;
    navchange();
    animate(slider, {
        left: -1903 * index
    }, function () {
        if (index === 6) {
            slider.style.left = "-1903px";
            index = 1;
        }
        isMoving = false;
    });
}

function prev() {
    if (isMoving) {
        return
    }
    isMoving = true;
    index--;
    navchange();
    animate(slider, {
        left: -1903 * index
    }, function () {
        if (index === 0) {
            slider.style.left = "-13321px";
            index = 5;
        }
        isMoving = false;
    });
}
var timer = setInterval(next, 3000);
// box.onmousemove = function () {
//     animate(left, {
//         opacity: 50
//     });
//     animate(right, {
//         opacity: 50
//     });
//     clearInterval(timer);
// }
// box.onmouseout = function () {
//     animate(left, {
//         opacity: 0
//     });
//     animate(right, {
//         opacity: 0
//     });
//     timer = setInterval(next, 3000);
// }
right.onclick = next;
left.onclick = prev;
for (var i = 0; i < Navlist.length; i++) {
    Navlist[i].index = i;
    Navlist[i].onclick = function () {
        index = this.index + 1;
        navchange();
        animate(slider, {
            left: -1903 * index
        })
    }
}

function navchange() {
    for (var i = 0; i < Navlist.length; i++) {
        Navlist[i].className = "";
    }
    if (index === 6) {
        Navlist[0].className = "active";
    } else if (index === 0) {
        Navlist[4].className = "active";
    } else
        Navlist[index - 1].className = "active";
}

//这里是左面赛事，比赛站点的js代码。我也想再开一个js文件了

var place_list = document.getElementsByClassName("place");
var place_content_list = document.getElementsByClassName("place-content");
place_list[0].style.color = "#e00000";
place_content_list[0].style.display = "block";
for (i = 0; i < place_list.length; i++) {
    place_list[i].index = i;
    place_list[i].onclick = function () {
        for (var j = 0; j < place_list.length; j++) {
            place_list[j].style.color = "#333";
            place_content_list[j].style.display = "none";
        }
        place_content_list[this.index].style.display = "block";
        this.style.color = "#e00000";
    }
}
// this.parentNode.style.boxShadow = "5px 5px 5px grey";
//赛事的图片添加阴影
var game_img_list = document.getElementsByClassName("game-video-img");
for (i = 0; i < game_img_list.length; i++) {
    game_img_list[i].onmouseover = function () {
        this.children[0].style.transform = "scale(1.1)";
        this.style.boxShadow = "5px 5px 5px grey";
    }
    game_img_list[i].onmouseout = function () {
        this.children[0].style.transform = "scale(1.0)";
        this.style.boxShadow = "";
    }
}

//倒计时
window.onload = clock;

var count_day = document.getElementsByClassName("count-day");
var count_hour = document.getElementsByClassName("count-hour");
var count_minute = document.getElementsByClassName("count-minute");
var count_second = document.getElementsByClassName("count-second");
console.log(count_day);
console.log(count_hour);
console.log(count_minute);
console.log(count_second);

function clock(st = ["Mar 15 2020 14:00:00","Mar 29 2020 14:00:00","Apr 26 2020 14:00:00","Apr 12 2020 14:00:00","May 10 2020 14:00:00","May 24 2020 14:00:00"]) {
    var today = new Date(); //当前时间
    //将天，分，秒传给对象
    for(i = 0;i<count_second.length; i++){
        var stopTime = new Date(st[i]); //结束时间
    var shenyu = stopTime.getTime() - today.getTime(); //倒计时毫秒数
    h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();
    stopH = stopTime.getHours(),
        stopM = stopTime.getMinutes(),
        stopS = stopTime.getSeconds();
    shengyuD = parseInt(shenyu / (60 * 60 * 24 * 1000)), //转换为天
        D = parseInt(shenyu) - parseInt(shengyuD * 60 * 60 * 24 * 1000), //除去天的毫秒数
        shengyuH = parseInt(D / (60 * 60 * 1000)), //除去天的毫秒数转换成小时
        H = D - shengyuH * 60 * 60 * 1000, //除去天、小时的毫秒数
        shengyuM = parseInt(H / (60 * 1000)), //除去天的毫秒数转换成分钟
        M = H - shengyuM * 60 * 1000; //除去天、小时、分的毫秒数
    S = parseInt((shenyu - shengyuD * 60 * 60 * 24 * 1000 - shengyuH * 60 * 60 * 1000 - shengyuM * 60 * 1000) / 1000) //除去天、小时、分的毫秒数转化为秒
    count_day[i].innerHTML = shengyuD;
    count_hour[i].innerHTML = shengyuH;
    count_minute[i].innerHTML = shengyuM;
    count_second[i].innerHTML = S;
    }
    setTimeout(clock, 1000);
}




//车队车手积分字体效果
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var tab_bd_list = document.getElementsByClassName("tab_bd_item");
choice1.onclick = function () {
    tab_bd_list[0].style.display = "block";
    tab_bd_list[1].style.display = "none";
    choice1.style.color = "red";
    choice2.style.color = "black";

}
choice2.onclick = function () {
    tab_bd_list[1].style.display = "block";
    tab_bd_list[0].style.display = "none";
    choice2.style.color = "red";
    choice1.style.color = "black";
}

//通过js实现给积分榜数据的对象批量加css属性
var tab_li1 = tab_bd_list[0].children[0].children[0];
var tab_mc_list1 = tab_bd_list[0].getElementsByClassName("mc");
var tab_name_list1 = tab_bd_list[0].getElementsByClassName("name");
var tab_dui_list1 = tab_bd_list[0].getElementsByClassName("dui");
var tab_jf_list1 = tab_bd_list[0].getElementsByClassName("jf");

tab_li1.style.height = "32px";

tab_mc_list1[0].style.color = "black";
tab_name_list1[0].style.color = "black";
tab_dui_list1[0].style.color = "black";
tab_jf_list1[0].style.color = "black";

tab_mc_list1[0].style.height = "32px";
tab_name_list1[0].style.height = "32px";
tab_dui_list1[0].style.height = "32px";
tab_jf_list1[0].style.height = "32px";

tab_mc_list1[0].style.lineHeight = "32px";
tab_name_list1[0].style.lineHeight = "32px";
tab_dui_list1[0].style.lineHeight = "32px";
tab_jf_list1[0].style.lineHeight = "32px";

for (i = 0; i < tab_mc_list1.length; i++) {
    if (i % 2 === 0) {
        tab_mc_list1[i].style.backgroundColor = "#fafafa";
        tab_name_list1[i].style.backgroundColor = "#fafafa";
        tab_dui_list1[i].style.backgroundColor = "#fafafa";
        tab_jf_list1[i].style.backgroundColor = "#fafafa";
    }
}

var tab_li2 = tab_bd_list[1].children[0].children[0];
var tab_mc_list2 = tab_bd_list[1].getElementsByClassName("mc");
var tab_dui_list2 = tab_bd_list[1].getElementsByClassName("dui");
var tab_jf_list2 = tab_bd_list[1].getElementsByClassName("jf");

tab_li2.style.height = "32px";

tab_mc_list2[0].style.color = "black";
tab_dui_list2[0].style.color = "black";
tab_jf_list2[0].style.color = "black";

tab_mc_list2[0].style.height = "32px";
tab_dui_list2[0].style.height = "32px";
tab_jf_list2[0].style.height = "32px";

tab_mc_list2[0].style.lineHeight = "32px";
tab_dui_list2[0].style.lineHeight = "32px";
tab_jf_list2[0].style.lineHeight = "32px";

for (i = 0; i < tab_mc_list2.length; i++) {
    if (i % 2 === 0) {
        tab_mc_list2[i].style.backgroundColor = "#fafafa";
        tab_dui_list2[i].style.backgroundColor = "#fafafa";
        tab_jf_list2[i].style.backgroundColor = "#fafafa";
    }
}

//更多精彩视频按钮的效果
var moreVideo = document.getElementById("more-video");
var moreVideoFont = moreVideo.children[0].children[0];
moreVideo.onmousemove = function () {
    moreVideo.style.borderColor = "#240055";
    moreVideoFont.style.color = "#240055";
}
moreVideo.onmouseout = function () {
    moreVideo.style.borderColor = "#d3d3d3";
    moreVideoFont.style.color = "#d3d3d3";
}

//鼠标移动到图片上面，图片放大,加个阴影边框,字体变色
var video_img_list = document.getElementsByClassName("video-box")[0].getElementsByTagName("img");
var video_span_list = document.getElementsByClassName("video-box")[0].getElementsByTagName("span");
for (i = 0; i < video_img_list.length; i++) {
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
for (i = 0; i < video_span_list.length; i++) {
    video_span_list[i].onmouseover = function () {
        this.style.color = "#e9a42c";
    }
    video_span_list[i].onmouseout = function () {
        this.style.color = "#222";
    }
}
