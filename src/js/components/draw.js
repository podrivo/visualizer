import { getRandomInt } from '../tools/utils'
import { randomColor } from '../tools/colors'
import { context } from '../tools/canvas'
import { audio, analyser } from '../tools/web-audio'
// import { dotsArr, createDots } from './dots'
// import { Dot, move } from './dot-canvas'
import { Circle, CircleArr } from './circle'

let counter = 0
export let vol, spectrum, spectrumFiltered

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
  spectrum = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(spectrum)
  vol = getAverageSpectrum(spectrum) // needs to be afterwards

  // remove zeros from spectrum/fft
  spectrumFiltered = spectrum.filter(function(e) { return e !== 0 })
  
  // Circle parameters
  let x = window.innerWidth / 2
  let y = window.innerHeight / 2
  let sizeL = getRandomInt(180, 260)
  let sizeM = getRandomInt(46, 120)
  let sizeS = getRandomInt(32, 92)
  let time = getRandomInt(14, 30)
  let color = randomColor()
  
  
  if (!audio.paused) {
    
    // random spectrum number
    function randomSpectrum() {
      return spectrumFiltered[Math.floor(Math.random()*spectrumFiltered.length)]
    }
    
    // if (CircleArr.length > 1) {
    //   for (var i = 0; i < CircleArr.length; i++) {
    //     // size = (spectrumFiltered[i] / 200 * (vol / 150)) * 50
    //     // scaleX = (spectrumFiltered[i] / 200 * (vol / 150)) * 2
    //     // console.log(scaleX)
    //     // scaleY = scaleX
    //     let circle = CircleArr[i]
    //     circle.size(context)
    //   }
    // }
    // for (var i = 0; i < CircleArr.length; i++) {
    //   CircleArr[i].scale(context)

    //   // context.scale(2, 2)
    //   // CircleArr.forEach((circle) => {
    //   //   circle.update(context)
    //   // })

    //   // flick effect
    //   // TweenMax.to(CircleArr[i], 0, {
    //   //   // scale: (randomSpectrum()/200 * noise(vol))*1.8
    //   //   // scale: (randomSpectrum()/200 * (vol/150))*2
    //   //   // scale: (spectrumFiltered[i]/200 * (vol/150))*2,
    //   //   onUpdate: () => {
    //   //     console.log('psiu')
    //   //     // context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    //   //     CircleArr.forEach((circle) => {
    //   //       circle.scale(context)
    //   //     })
    //   //   },
    //   // })
    // }



    // circle creation

    // smaller and slower
    if (vol > 5 && vol < 14 && counter > 6) {
      // console.log('smaller and slower:', vol)
      counter = 0
      const circle = new Circle(x, y, sizeS, time, color)
      CircleArr.push(circle)
      // circle.beat(context)
    }

    // smaller
    else if (vol > 14 && vol < 20 && counter > 10) {
      // console.log('smaller:', vol);
      counter = 0
      // createDots(quantity, sizeS(), time*(vol/50))
      const circle = new Circle(x, y, sizeS, time, color)
      CircleArr.push(circle)
    }

    // small
    else if (vol > 20 && vol < 60 && counter > 10) {
      // console.log('small:', vol);
      counter = 0
      // createDots(quantity, sizeS(), time*(vol/8))
      const circle = new Circle(x, y, sizeS, time, color)
      CircleArr.push(circle)
    }

    // medium
    else if (vol > 60 && vol < 90 && counter > 2) {
      // console.log('medium:', vol);
      counter = 0
      // createDots(quantity, sizeM(), time*(vol/5))
      const circle = new Circle(x, y, sizeM, time, color)
      CircleArr.push(circle)
    }

    // big
    else if (vol > 90 && vol < 120 && counter > 2) {
      // console.log('big:', vol);
      counter = 0
      // createDots(quantity, sizeL(), time*(vol/5))
      const circle = new Circle(x, y, sizeL, time, color)
      CircleArr.push(circle)
    }

    // biger
    else if (vol > 120 && vol < 130 && counter > 1) {
      // console.log('another biger:', vol);
      counter = 0
      // createDots(quantity*2, sizeL(), time*(vol/120))
      const circle = new Circle(x, y, sizeL, time, color)
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
