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