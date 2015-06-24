
// https://developers.google.com/youtube/iframe_api_reference
// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('ytplayer', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady() {
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}
function fuck() {
	// body...
	var myPlayer = document.getElementById('playerid');
	myPlayer.stopVideo();
}


function playthevideo(){

var myPlayer = document.getElementById('my-video');
myPlayer.playVideo();

}
function stopthevideo(){

var myPlayer = document.getElementById('my-video');
myPlayer.stopVideo();

}

function pausethevideo(){
var myPlayer = document.getElementById('my-video');
myPlayer.pauseVideo();

}





