// 'use strict'

// import './plugins/TweenMax.min.js'
// import './plugins/CustomEase.min.js'

// import './components/palette-colors'
import { webAudioSetup } from './web-audio-setup'
import { startAnimationFrame } from './start-animation-frame'
// import { soundPlayPause } from './components/sound-play-pause'
// import { audio } from './components/web-audio-setup'

// start
webAudioSetup()
// console.log(audio)
startAnimationFrame()

// function hasClass(element, cls) {
//   return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
// }


// songs
// export let inputUrl
// // let songsList, first, second

// let songsList = document.getElementsByClassName('songs-list')
// let first = document.getElementById('first')
// let second = document.getElementById('second')

// first.addEventListener('click', function(e){
//   inputUrl = 'https://soundcloud.com/weval/intro-preview'
//   // inputUrl = "https://soundcloud.com/pronouncedyea/they-truth-be-told-ye-remix";
//   soundPlayPause(audio, inputUrl)
//   // soundPlayPause()
//   songsList[0].classList.add('hide')
//   e.stopPropagation()
// });

// second.addEventListener('click', function(e){
//   inputUrl = 'https://soundcloud.com/gramatik/10-gramatik-muy-tranquilo'
//   soundPlayPause(audio, inputUrl)
//   // soundPlayPause()
//   songsList[0].classList.add('hide')
//   e.stopPropagation()
// });


// // click on body
// document.body.addEventListener('click', function() {
//   if (hasClass(songsList[0], 'hide')) {
//     if (audio.paused) {
//       audio.play()
//     } else {
//       audio.pause
//       for (var i = 0; i < dotsArr.length; i++) {
//         TweenMax.to(dotsArr[i], 3, { scale: 0, ease: Power3.easeOut })
//       }
//     }
//   }
// })
