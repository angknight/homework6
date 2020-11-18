var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video Down");
	video.playbackRate = video.playbackRate - 0.1;
	console.log("New Video Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video Up");
	video.playbackRate = video.playbackRate + 1;
	console.log("New Video Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video Ahead");
	video.currentTime = video.currentTime + 5;
	if (video.currentTime > video.duration){
		video.currentTime = 0
	}
	console.log("Current Location of the video is "+ video.currentTime)
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Changing Video Volume");
	let vol= document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value/100
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video Audio");
	let vol= document.querySelector("#volume").innerHTML = 0;
	video.muted = true;
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Use Exisiting Grayscale Class");
	
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Remove Grayscale Class");
	
});