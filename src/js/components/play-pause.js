import { audio } from '../tools/audio'
import { dotsArr, createDots } from './dots'
import { soundCloudUrl } from './soundcloud'

export function soundPlayPause(audio, inputUrl) {
  // if paused, start to play
  if (audio.paused) {
    if (audio.src) {
      audio.play()
    } else {
      soundCloudUrl(inputUrl)
      audio.play()
    }

  // if playing, pause and shrink dots
  } else {
    audio.pause
    for (var i = 0; i < dotsArr.length; i++) {
      TweenMax.to(dotsArr[i], 3, {scale: 0, ease:Power3.easeOut})
    }
  }
}

export let inputUrl
let songsList = document.getElementsByClassName('songs-list')
let first = document.getElementById('first')
let second = document.getElementById('second')

first.addEventListener('click', function (e) {
  inputUrl = 'https://soundcloud.com/weval/intro-preview'
  // inputUrl = "https://soundcloud.com/pronouncedyea/they-truth-be-told-ye-remix";
  
  soundPlayPause(audio, inputUrl)
  songsList[0].classList.add('hide')
  
  e.stopPropagation()
})

second.addEventListener('click', function (e) {
  inputUrl = 'https://soundcloud.com/pronouncedyea/they-truth-be-told-ye-remix'
  
  soundPlayPause(audio, inputUrl)
  songsList[0].classList.add('hide')
  
  e.stopPropagation()
})

// click on body
export function clickBodyPause(){
  document.body.addEventListener('click', function () {
    if (songsList[0].classList.contains('hide')) {
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
        for (var i = 0; i < dotsArr.length; i++) {
          TweenMax.to(dotsArr[i], 3, { scale: 0, ease: Power3.easeOut })
        }
      }
    }
  })
}