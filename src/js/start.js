
// start
webAudioSetup();
startAnimationFrame();

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


var songsList = document.getElementsByClassName('songs-list');
var first = document.getElementById('first');
var second = document.getElementById('second');

first.addEventListener('click', function(e){
  inputUrl = "https://soundcloud.com/weval/intro-preview";
  soundPlayPause(inputUrl);
  songsList[0].classList.add('hide');
  e.stopPropagation();
});

second.addEventListener('click', function(e){
  inputUrl = "https://soundcloud.com/gramatik/10-gramatik-muy-tranquilo";
  soundPlayPause(inputUrl);
  songsList[0].classList.add('hide');
  e.stopPropagation();
});



// click on body
document.body.addEventListener('click', function() {
  if (hasClass(songsList[0], 'hide')) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      for (var i = 0; i < dotsArr.length; i++) {
        TweenMax.to(dotsArr[i], 3, { scale: 0, ease: Power3.easeOut });
      }
    }
  }
});