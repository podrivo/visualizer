import { getRandomInt } from '../tools/utils'
import { randomColor } from '../tools/colors'
import { context } from '../tools/canvas'
import { audio, analyser } from '../tools/web-audio'
import { dotsArr, createDots } from './dots'
import { Dot, move } from './dot-canvas'
import { Circle, CircleArr } from './circle'

let counter = 0

function getAverageSpectrum(spectrum) {
  var values = 0
  var length = spectrum.length

  for (var i = 0; i < length; i++) {
    values += spectrum[i]
  }

  return (values / length)
}

// createParticle

export function draw() {
  let spectrum = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(spectrum)
  let vol = getAverageSpectrum(spectrum) // needs to be afterwards

  // remove zeros from spectrum/fft
  let spectrumFiltered = spectrum.filter(function(e) { return e !== 0 })
  
  // createDots parameters
  function sizeL() {return getRandomInt(180, 260)}
  function sizeM() {return getRandomInt(46, 120)}
  function sizeS() {return getRandomInt(32, 92)}
  let quantity = 1
  let time = 10
  let scale = 1
  
  let startX = window.innerWidth / 2
  let startY = window.innerHeight / 2
  // let size = 20
  let color = randomColor()

  if (!audio.paused) {

    // random spectrum number
    function randomSpectrum() {
      return spectrumFiltered[Math.floor(Math.random()*spectrumFiltered.length)]
    }

    for (var i = 0; i < dotsArr.length; i++) {

      // flick effect
      TweenMax.to(dotsArr[i], 0, {
        // scale: (randomSpectrum()/200 * noise(vol))*1.8
        // scale: (randomSpectrum()/200 * (vol/150))*2
        scale: (spectrumFiltered[i]/200 * (vol/150))*2
      })
    }

    // circle creation
    // smaller and slower
    if (vol > 5 && vol < 14 && counter > 6) {
      // console.log('smaller and slower:', vol)
      counter = 0
      const circle = new Circle(startX, startY, sizeS(), color)
      CircleArr.push(circle)
    }

    // smaller
    else if (vol > 14 && vol < 20 && counter > 10) {
      // console.log('smaller:', vol);
      counter = 0
      // createDots(quantity, sizeS(), time*(vol/50))
      const circle = new Circle(startX, startY, sizeS(), color)
      CircleArr.push(circle)
    }

    // small
    else if (vol > 20 && vol < 60 && counter > 10) {
      // console.log('small:', vol);
      counter = 0
      // createDots(quantity, sizeS(), time*(vol/8))
      const circle = new Circle(startX, startY, sizeS(), color)
      CircleArr.push(circle)
    }

    // medium
    else if (vol > 60 && vol < 90 && counter > 2) {
      // console.log('medium:', vol);
      counter = 0
      // createDots(quantity, sizeM(), time*(vol/5))
      const circle = new Circle(startX, startY, sizeM(), color)
      CircleArr.push(circle)
    }

    // big
    else if (vol > 90 && vol < 120 && counter > 2) {
      // console.log('big:', vol);
      counter = 0
      // createDots(quantity, sizeL(), time*(vol/5))
      const circle = new Circle(startX, startY, sizeL(), color)
      CircleArr.push(circle)
    }

    // biger
    else if (vol > 120 && vol < 130 && counter > 1) {
      // console.log('another biger:', vol);
      counter = 0
      // createDots(quantity*2, sizeL(), time*(vol/120))
      const circle = new Circle(startX, startY, sizeL(), color)
      CircleArr.push(circle)
    }

    // explosion
    else if (vol > 135 && counter > 1) {
      // console.log('explosion:', vol)
      counter = 0
      // createDots(quantity*1, sizeL(), time*(vol/50))
      // createDots(quantity*2, sizeM(), time*(vol/50))
      // createDots(quantity*3, sizeS(), time*(vol/120))
      // createDots(quantity*3, sizeS(), time*(vol/130))
      // createDots(quantity*3, sizeS(), time*(vol/140))
    }

    // increase counter
    counter++
  }
}
