
function soundPlayPause() {

  // if paused, start to play
  if (audio.paused) {
    audio.play();
    // gainNode.gain.value = -1; // mute

  // if playing, pause and shrink dots
  } else {
    audio.pause();
    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 3, {scale: 0, ease:Power3.easeOut});
    }
  }
}
