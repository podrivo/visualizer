// import { canvas } from '../tools/canvas'
import { webAudio } from '../tools/web-audio'
import { startAnimationFrame } from './animation-frame'
import { start } from './play-pause'

// start
start()
// canvas()
webAudio()
startAnimationFrame()

// click on body
// document.body.addEventListener('click', function () {
//   if (songsList[0].classList.contains('hide')) {
//     if (audio.paused) {
//       audio.play()
//     } else {
//       audio.pause()
//       for (var i = 0; i < dotsArr.length; i++) {
//         TweenMax.to(dotsArr[i], 3, { scale: 0, ease: Power3.easeOut })
//       }
//     }
//   }
// })