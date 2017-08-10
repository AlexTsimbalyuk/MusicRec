var btn = document.querySelector(".top");
var min_height = document.querySelector(".min_height");
var min = 500;

btn.addEventListener("click", toTop);

window.onscroll = function() {
	var height = document.documentElement.clientHeight;
	
	var scrolling = window.pageYOffset;
	
	console.log(document.documentElement.clientHeight);
	
	if (document.documentElement.clientHeight <= min){
		min_height.style.display = "none";
	}
	if (document.documentElement.clientHeight > min){
		min_height.style.display = "block";
	}
	if (scrolling > height ) {
		btn.classList.add("visible");
	} else {
		btn.classList.remove("visible");
	}
}

function toTop(){
	window.scrollTo(0, 0);
}
	
	