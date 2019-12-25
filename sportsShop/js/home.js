//轮播
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
	        left: -1535 * index
	    }, function () {
	        if (index === 6) {
	            slider.style.left = "-1535px";
	            index = 1;
	        }
	        isMoving = false;
	    });
	}

	function prev() {
	    if (isMoving) {
	        return;
	    }
	    isMoving = true;
	    index--;
	    navchange();
	    animate(slider, {
	        left: -1535 * index
	    }, function () {
	        if (index === 0) {
	            slider.style.left = "-7675px";
	            index = 5;
	        }
	        isMoving = false;
	    });
	}
	var timer = setInterval(next, 3000);
	box.onmousemove = function () {
	    animate(left, {
	        opacity: 80
	    });
	    animate(right, {
	        opacity: 80
	    });
	    clearInterval(timer);
	}
	box.onmouseout = function () {
	    animate(left, {
	        opacity: 0
	    });
	    animate(right, {
	        opacity: 0
	    });
	    timer = setInterval(next, 3000);
	}
	right.onclick = next;
	left.onclick = prev;
	for (var i = 0; i < Navlist.length; i++) {
	    Navlist[i].index = i;
	    Navlist[i].onclick = function () {
	        index = this.index + 1;
	        navchange();
	        animate(slider, {
	            left: -1535 * index
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