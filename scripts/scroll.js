// button "scrolling up"
var btn = document.querySelector( ".top" );

	btn.addEventListener( "click", toTop );

window.onscroll = function() {
	var height = document.documentElement.clientHeight;
	
	var scrolling = window.pageYOffset;
	
	console.log(document.documentElement.clientHeight);
	
	
	// display or hide the section of track comparison
	var min_height = document.querySelector(".min_height");
	var min = 500;
	
	if (document.documentElement.clientHeight <= min){
		min_height.style.display = "none";
	}
	if (document.documentElement.clientHeight > min){
		min_height.style.display = "block";
	}	
	
	
	// display or hide the button "scrolling up" 
	if ( scrolling > height ) {
		btn.classList.add("visible");
	} else {
		btn.classList.remove( "visible" );
	}
}

	
function toTop() {
	
	var scrolling = window.pageYOffset;
	
	if ( scrolling > 0 ) {
		window.scrollBy( 0, -150 );
		setTimeout( "toTop()", 25 );
	}
}	