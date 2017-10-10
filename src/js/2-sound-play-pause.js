
function soundPlayPause() {

  // if paused, start to play
  if (audio.paused) {
    audio.play();
    gainNode.gain.value = -1;

  // if playing, pause and shrink dots
  } else {
    audio.pause();
    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 2, {scale: 0});
    }
  }

}
