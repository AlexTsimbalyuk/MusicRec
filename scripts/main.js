var player = document.querySelectorAll(".player");

var track = new Audio();
var field;
var minutes;
var seconds;
var time = 0;
var interval; 

for (var i = 0; i < player.length; i++){
	
	player[i].onclick = function(event) {
		var target = event.target; 
		var sound = target.nextElementSibling.dataset.sound;
		field = target.nextElementSibling;

		while (target != this) { 
			if (target.className == 'track__button' || target.className == 'track__button active') { 
				playTrack(sound, target);
				return;								   
			}
			return; 
		} 
	};
}

function playTrack(sound, press){
	
	if (track.currentTime == 0 || track.paused){
		track.src = sound;
		track.play();
		press.classList.add('active');
		playtimeAnimate(field, track);
		start();
		
		timerId = setInterval(function(){	
			if (track.ended){ 
					press.classList.remove('active');
					getReset();
					clearInterval(timerId);
			}
		},60);
	}	
	
	else if (track.currentTime > 0 && press.classList.contains('active')){
		track.pause();
		track.currentTime == 0;
		press.classList.remove('active');
		getReset();
		clearInterval(timerId);
	}
}

function playtimeAnimate(activeField, track){
	
	var timerId = setInterval(function(){
		var currentTime = track.currentTime;
		var duration = track.duration; 
		var pct = currentTime / ( duration / 100 );
		
		activeField.style.boxShadow = "inset " + activeField.clientWidth * ( pct / 100 ) + "1px -1px 1px 1px rgba(255, 204, 51, 0.5)";
		activeField.style.transition = "0.5s";
		
		if (track.ended || track.paused){
			setTimeout(function(){
				activeField.style.boxShadow = "none";
				activeField.style.transition = "0.25s";
				clearInterval(timerId);
			},100);
		}
	}, 60);
}

function start(){
	minutes = field.children[2].children[0];
	seconds = field.children[2].children[1];
	interval = setInterval(incrementTime, 1000);
}

function incrementTime(){
	time++;

	var MIN = Math.floor(time / 60);
	var SEC = time % 60;

	minutes.innerText = fill(MIN);
	seconds.innerText = fill(SEC);
}

function getReset(){
	clearInterval(interval);

	time = 0;

	minutes.innerText = '00';
	seconds.innerText = '00';
}

function fill(x){
	if (x < 10){
		return '0' + x;
	} else {
		return x;
	}
}