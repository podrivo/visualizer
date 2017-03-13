
function soundPlayPause() {

  // if paused, start to play
  if (audio.paused) {
    audio.play();

  // if playing, pause and shrink dots
  } else {
    audio.pause();
    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 3, {scale: 0});
    }
  }

}
