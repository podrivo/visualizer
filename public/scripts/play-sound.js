
function playSound() {

  if (audio.paused) {

    audio.play();

  } else {

    audio.pause();
    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 3, {scale: 0});
    }
  }

}
