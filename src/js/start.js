
// start
webAudioSetup();
startAnimationFrame();

// click on body
document.body.addEventListener('click', function(){
  soundPlayPause();
});