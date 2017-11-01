// import { inputUrl } from '../start'
// import { audio } from './web-audio-setup'
import { dotsArr } from './create-dots'
import { soundcloudUrl } from './soundcloud-url'
import { audio } from './web-audio-setup'
import { createDots } from './create-dots'
// import { inputUrl } from './sound-play-pause'

export function soundPlayPause(audio, inputUrl) {
  console.log('soundPlayPause', audio)
  // if paused, start to play
  if (audio.paused) {
    if (audio.src) {
      console.log('src true', audio)
      audio.play()
    } else {
      soundcloudUrl(inputUrl)
      console.log('—exception!')
      audio.play()
    }
    // gainNode.gain.value = -1; // mute

  // if playing, pause and shrink dots
  } else {
    audio.pause
    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 3, {scale: 0, ease:Power3.easeOut});
    }
  }
}

export let inputUrl
// let songsList, first, second

let songsList = document.getElementsByClassName('songs-list')
let first = document.getElementById('first')
let second = document.getElementById('second')

first.addEventListener('click', function (e) {
  inputUrl = 'https://soundcloud.com/weval/intro-preview'
  // inputUrl = "https://soundcloud.com/pronouncedyea/they-truth-be-told-ye-remix";
  soundPlayPause(audio, inputUrl)
  // soundPlayPause()
  songsList[0].classList.add('hide')
  e.stopPropagation()
});

second.addEventListener('click', function (e) {
  inputUrl = 'https://soundcloud.com/gramatik/10-gramatik-muy-tranquilo'
  soundPlayPause(audio, inputUrl)
  // soundPlayPause()
  songsList[0].classList.add('hide')
  e.stopPropagation()
});

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
}

// function hasClass(target, className) {
//   return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
// }

// click on body
document.body.addEventListener('click', function () {
  console.log('click body/container')
  if (hasClass(songsList[0], 'hide')) {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause
      for (var i = 0; i < dotsArr.length; i++) {
        TweenMax.to(dotsArr[i], 3, { scale: 0, ease: Power3.easeOut })
      }
    }
  }
})