
function playSound() {

  console.log(sound);
  
  if ( sound.isPlaying() ) {

    // smooth pause
    // for (var i = 0; i <= 9; i++) {
      // setInterval(function(){
        // sound.setVolume('0.'+i);
        // console.log('teste',i);
      // }, 100);
    // }
    // setInterval(function(){
    //   sound.setVolume(0.9);
    //   setInterval(function(){
    //     sound.setVolume(0.8);
    //     setInterval(function(){
    //   });
    // }, 100);
    // sound.setVolume(0.1);
    sound.pause();

    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 3, {
        scale: 0
      });
    }
  } else {
    sound.play();
  }

}
